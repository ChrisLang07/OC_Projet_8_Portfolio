const Project = require('../models/project.js');

exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find(); 
        res.json(projects); 
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des projets" });
    }
};
