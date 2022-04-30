const express = require('express');

const router = express.Router();

const path = require('path');

const bookShelfController = require('../controllers/bookshelf')

router.get('/category', bookShelfController.getCategory);

router.get('/category/:bookId', bookShelfController.getBook);

// router.get('/archive');

router.get('/', bookShelfController.getIndex );

module.exports = router;