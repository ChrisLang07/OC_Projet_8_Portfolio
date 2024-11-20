const mongoose = require('mongoose');

// Définition du schéma pour un projet
const projectSchema = new mongoose.Schema({
    project: { type: String, required: true },
    "project-title": { type: String, required: true },
    name: { type: String, required: true },
    imageUrls: {
        small: { type: String, required: true },
        medium: { type: String, required: true },
        large: { type: String, required: true }
    },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

// Création du modèle
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
