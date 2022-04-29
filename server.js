const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const path = require('path');

const bookShelfRoutes = require('./routes/bookshelf');
const bookOwnerRoutes = require('./routes/bookowner');

const errorController = require('./controllers/error')

app.set('view engine', 'pug');
app.set('views', 'views');

const port = 8000;

const host = '127.0.0.1';

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/bookowner', bookOwnerRoutes);
app.use(bookShelfRoutes);


app.use(errorController.get404)

app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
})