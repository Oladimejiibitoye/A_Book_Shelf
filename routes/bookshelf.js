const express = require('express');

const router = express.Router();

const path = require('path');

router.get('/category');

router.get('/books');

router.get('/books/:bookid');

router.get('/archive');

router.get('/' );

module.exports = router;