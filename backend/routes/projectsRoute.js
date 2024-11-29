const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projectsController');

// Définir la route pour récupérer tous les projets
router.get('/projects', projectsController.getProjects);

module.exports = router;
