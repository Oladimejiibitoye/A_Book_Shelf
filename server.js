const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const path = require('path');

const bookShelfRoutes = require('./routes/bookshelf');
const bookOwnerRoutes = require('./routes/bookowner');

app.set('view engine', 'pug');
app.set('views', 'views');

const port = 8000;

const host = '127.0.0.1';

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use(bookOwnerRoutes);
app.use(bookShelfRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, './', 'views', '404.html'))
})

// module.exports = path.dirname(require.main.filename);

app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
})