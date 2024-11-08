const express = require('express');
const router = express.Router();
const imagesController = require('../controllers/images');

// Route pour récupérer les images d'un projet spécifique
router.get('/images/:project', imagesController.getProjectImages);

module.exports = router;
