const express = require('express');

const router = express.Router();

const path = require('path')

router.get('/add-book')

router.get('/books');

router.post('/add-books');

router.get('/edit-book/:bookId');

router.post('/edit-book');


module.exports = router;