const express = require('express');

const router = express.Router();

const path = require('path');

const bookOwnerController = require('../controllers/bookowner')

router.get('/add-book', bookOwnerController.getAddBook)

router.get('/books', bookOwnerController.getBooks);

router.post('/add-book', bookOwnerController.postAddBook);

router.get('/archive', bookOwnerController.getArchive);

router.post('/archive', bookOwnerController.postArchive)

router.get('/edit-book/:bookId', bookOwnerController.getEditBook);

router.post('/edit-book', bookOwnerController.postEditBook);


module.exports = router;