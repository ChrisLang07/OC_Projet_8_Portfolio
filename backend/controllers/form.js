const Form = require('../models/form');

exports.createForm = (req, res, next) => {
    const formData = JSON.parse(req.body.form);
    delete formData._id;
    delete formData.userId;

    const form = new Form({
        ...formData,
        userId: req.auth.userId
    });
    form.save()
    .then(res.status(201).json({ message: 'Message envoyé !'}))
    .catch((error) => {
        res.status(400).json({ error })});
};