const express = require('express');
const router = express.Router();

const {signin, signup} = require('../Controllers/authController.js');

router.post('/signin', signin);
router.post('/signUp', signup);

module.exports = router;