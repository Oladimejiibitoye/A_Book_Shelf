const Book = require('../models/book');

exports.getCategory = (req, res, next) => {
    Book.findAll()
    .then(books => {
        res.render('bookshelf/category', {
            boks: books,
            pageTitle: 'All Books',
            path: '/category'
        });
    })
    .catch((err) => {
        console.log(err);
    })
}

exports.getBook = (req, res, next) => {
    const book_Id = req.params.bookId;
    Book.findAll({where: {id: book_Id}})
    .then(books => {
        res.render('bookshelf/book-detail', {
            book: books[0],
            pageTitle: books[0].title,
            path: '/books'
        });
    })
    .catch((err) => {
        console.log(err);
    })
}

exports.getIndex = (req, res, next) => {
    Book.findAll()
    .then(books => {
        res.render('bookshelf/index', {
            boks: books,
            pageTitle: 'Bookshelf',
            path: '/'
        });
    })
    .catch((err) => {
        console.log(err);
    })
}

