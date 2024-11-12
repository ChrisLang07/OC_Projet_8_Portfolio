const mongoose = require('mongoose');

// Définition du schéma pour un projet
const projectSchema = new mongoose.Schema({
    project: { type: String, required: true },
    "project-title": { type: String, required: true },
    name: { type: String, required: true },
    imageUrl: { type: String, required: true }, // URL de l'image
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now } // Date de création automatique
});

// Création du modèle
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
