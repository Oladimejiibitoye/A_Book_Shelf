const express = require('express');

const router = express.Router();

const authController = require('../controllers/auth')

router.get('/login', authController.getLogin)

router.get('/login', authController.postLogin)

module.exports = router;