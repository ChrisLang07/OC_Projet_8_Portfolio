const express = require('express');
const { getProjects } = require('../controllers/projectsController.js'); 
const router = express.Router();


router.get('/projects', getProjects);

module.exports = router;

