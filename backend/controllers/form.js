const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const Form = require('../models/form'); // Assure-toi d'importer ton modèle

const transporter = nodemailer.createTransport({
    host: 'smtp.laposte.net', // Serveur SMTP de La Poste
    port: 587, // Utilise 587 pour TLS ou 465 pour SSL
    secure: false, // Si tu utilises le port 465, mets secure à true
    auth: {
        user: process.env.EMAIL_USER, // Ton adresse e-mail La Poste
        pass: process.env.EMAIL_PASS  // Ton mot de passe
    }
});

exports.createForm = [
    // Validation des champs
    body('name')
        .notEmpty().withMessage('Le nom est requis.'),
    body('email')
        .isEmail().withMessage('Adresse email invalide.')
        .normalizeEmail(), // Normaliser l'email
    body('message')
        .notEmpty().withMessage('Le message est requis.'),
    
    // Gestion de la requête
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const formData = req.body; 
        const form = new Form({
            ...formData
        });

        form.save()
            .then(() => {
                // Envoi de l'e-mail à l'administrateur
                const adminMailOptions = {
                    from: process.env.EMAIL_USER, // adresse de l'expéditeur
                    to: process.env.ADMIN_EMAIL, // Utilisation de la variable d'environnement pour l'adresse de l'administrateur
                    subject: 'Nouveau message du formulaire de contact',
                    text: `Nom: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
                };

                // Envoi de l'e-mail de confirmation à l'utilisateur
                const userMailOptions = {
                    from: process.env.EMAIL_USER, // adresse de l'expéditeur
                    to: formData.email, // adresse du destinataire (l'email de l'utilisateur)
                    subject: 'Confirmation de votre message',
                    text: `Bonjour ${formData.name},\n\nMerci pour votre message : "${formData.message}".\nNous vous contacterons bientôt.\n\nCordialement,`
                };

                // Envoi de l'e-mail à l'administrateur
                transporter.sendMail(adminMailOptions, (error) => {
                    if (error) {
                        return res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email à l\'administrateur : ' + error.message });
                    }

                    // Ensuite, envoie l'e-mail de confirmation à l'utilisateur
                    transporter.sendMail(userMailOptions, (error) => {
                        if (error) {
                            return res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email de confirmation : ' + error.message });
                        }
                        res.status(201).json({ message: 'Formulaire envoyé avec succès ! Un email de confirmation a été envoyé.' });
                    });
                });
            })
            .catch((error) => {
                res.status(400).json({ error: 'Erreur lors de l\'envoi du formulaire : ' + error.message });
            });
    }
];
