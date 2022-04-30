const Book = require('../models/book');

exports.getAddBook = (req, res, next) => {
    res.render('bookowner/edit-book', {
        pageTitle: 'Add Book',
        path: '/bookowner/add-book',
        editing: false
    })
}

exports.postAddBook = (req, res, next) => {
    const {
        title,
        bookcover,
        author,
        category,
        description,
        publication_date } = req.body;

    req.user
    .createBook({
        title: title,
        bookcover: bookcover,
        author: author,
        category: category,
        description: description,
        publication_date: publication_date
    }).then((result) => {
        console.log('book created successfully');
        res.redirect('/bookowner/books')
    })
    .catch((err) => {
        console.log(err);
    })
};

exports.getBooks = (req, res, next) => {
    req.user
    .getBooks()
    .then(books => {
        res.render('bookowner/books', {
            boks: books,
            pageTitle: 'Bookowner Book',
            path: '/bookowner/books',
        })
    })
    .catch(err => console.log(err))
    
}

exports.getEditBook = (req, res, next) => {
    const editMode = req.query.edit;
    if(!editMode) {
        return res.redirect('/');
    }
    const book_Id = req.params.bookId;
    req.user.getBooks({where: {id: book_Id}})
    .then(books => {
        const book = books[0]
        if(!book){
            return res.redirect('/')
        }
        res.render('bookowner/edit-book', {
            pageTitle: 'Edit Book',
            path: '/bookowner/edit-book',
            editing: editMode,
            book: book
        });
    })
    .catch((err) => {
        console.log(err);
    })
}

exports.postEditBook = (req, res, next) => {
    const book_Id = req.body.bookId;
    const updatedTitle = req.body.title;
    const updatedBookcover = req.body.bookcover;
    const updatedAuthor = req.body.author;
    const updatedCategory = req.body.category;
    const updatedDesc = req.body.description;
    const UpdatedPub_date = req.body.publication_date;
    Book.findAll({where: {id: book_Id}})
    .then(books => {
        books[0].title = updatedTitle;
        books[0].category = updatedCategory;
        books[0].author = updatedAuthor;
        books[0].bookcover = updatedBookcover;
        books[0].description = updatedDesc;
        books[0].publication_date = UpdatedPub_date;
        return books[0].save();
        })
    .then((result) => {
        console.log('Updated Book Successfully');
        res.redirect('/bookowner/books');
    })
    .catch((err) => {
        console.log(err);
    });
};

