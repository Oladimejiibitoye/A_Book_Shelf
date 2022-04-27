const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const bookShelfRoutes = require('./routes/bookshelf');
const bookOwnerRoutes = require('./routes/bookowner');

const port = 8000;

const host = '127.0.0.1';

app.use(bodyParser.urlencoded({extended: false}));

//routes
app.use(bookOwnerRoutes);
app.use(bookShelfRoutes);


app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
})