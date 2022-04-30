const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const path = require('path');

const sequelize = require('./connection/database');

const bookShelfRoutes = require('./routes/bookshelf');
const bookOwnerRoutes = require('./routes/bookowner');

const errorController = require('./controllers/error');

const Book = require('./models/book');
const User = require('./models/user');
const Archive = require('./models/archive');
const ArchiveItem = require('./models/archiveitem');

app.set('view engine', 'ejs');
app.set('views',  'views');

const port = 8000;

const host = '127.0.0.1';

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    User.findAll({where: {id: 1}})
        .then(users => {
            req.user = users[0];
            next();
        })
        .catch(err => console.log(err));
})

//routes
app.use('/bookowner', bookOwnerRoutes);
app.use(bookShelfRoutes);


app.use(errorController.get404);

Book.belongsTo(User, { constraints: true, onDelete: 'CASCADE'});
User.hasMany(Book);
User.hasOne(Archive);
Archive.belongsTo(User);
Archive.belongsToMany(Book, { through: ArchiveItem});
Book.belongsToMany(Archive, { through: ArchiveItem});

sequelize
    // .sync({force: true})
    .sync()
    .then((result) => {
        return User.findAll({where: {id: 1}});   
    })
    .then(users => {
        const user = users[0]
        if(!user){
            return User.create({Name: 'Oladimeji', Email: 'test@test.com'})
        }
        return user;
    })
    .then(user => {
        // console.log(user);
        return user.createArchive();   
    })
    .then(archive => {
        app.listen(port, host, () => {
            console.log(`Server is running on http://${host}:${port}`)
        })
    })
    .catch((err) =>
    {
        console.log(err)
    })