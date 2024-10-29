const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const Form = require('../models/form'); 

const transporter = nodemailer.createTransport({
    host: 'smtp.laposte.net',
    port: 465,  // Port sécurisé pour TLS
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

exports.createForm = [
    body('name')
        .notEmpty().withMessage('Le nom est requis.'),
    body('email')
        .isEmail().withMessage('Adresse email invalide.')
        .normalizeEmail(),
    body('message')
        .notEmpty().withMessage('Le message est requis.'),

    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const formData = req.body;

        new Form(formData).save()
            .then(() => {
                transporter.sendMail({
                    from: process.env.EMAIL_USER,
                    to: process.env.ADMIN_EMAIL,
                    subject: 'Nouveau message du formulaire de contact',
                    text: `Nom: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
                })
                .then(() => {
                    return transporter.sendMail({
                        from: process.env.EMAIL_USER,
                        to: formData.email,
                        subject: 'Confirmation de votre message',
                        text: `Bonjour ${formData.name},\n\nMerci pour votre message : "${formData.message}".\nNous vous contacterons bientôt.\n\nCordialement,`
                    });
                })
                .then(() => {
                    res.status(201).json({ message: 'Formulaire envoyé avec succès ! Un email de confirmation a été envoyé.' });
                })
                .catch(error => {
                    res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email : ' + error.message });
                });
            })
            .catch(error => {
                res.status(500).json({ error: 'Erreur lors de la sauvegarde du formulaire : ' + error.message });
            });
    }
];
