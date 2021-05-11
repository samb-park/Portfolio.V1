const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');

const app = express();

const publicDirectoryPath = path.join(__dirname, './public');
const viewsPath = path.join(__dirname, 'views');

app.set('view engine', 'ejs');
app.set('views', viewsPath);

app.use(express.static(publicDirectoryPath))


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/portfolio', (req, res) => {
    res.render('portfolio');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/resume', (req, res) => {
    res.render('resume');
});

module.exports = app;