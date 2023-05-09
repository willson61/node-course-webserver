const express = require('express');
var hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


//Contenido estatico
app.use( express.static('public') );


app.get('/', (req, res) => {
    // res.sendFile(__dirname + '/public/404.html');
    res.render('home', {
        name: 'Williams',
        title: 'Curso Node'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Williams',
        title: 'Curso Node'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Williams',
        title: 'Curso Node'
    });
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})