const express = require('express');
const router = express.Router();
const formCtrl = require ('../controllers/form');

router.post('/', formCtrl.createForm);

module.exports = router;