const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const formSchema = new mongoose.Schema({
    name:{type: String, required: true},
    email: {type: String, required: true, unique: true},
    message: {type: String, required: true}
});

formSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Form', formSchema);
