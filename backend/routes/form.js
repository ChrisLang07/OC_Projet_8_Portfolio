const express = require('express');
const router = express.Router();
const formCtrl = require ('../controllers/form');
const auth = require('../middleware/auth');

router.post('/', formCtrl.createForm);

module.exports = router;