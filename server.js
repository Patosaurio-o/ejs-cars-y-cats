const express = require('express');
const app = express();
const ejs = require('ejs')


app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.get('/cars', (req, res) =>{
  res.render('cars');
});

app.get('/cats', (req, res) =>{
  res.render('cats');
});

app.get('/form', (req, res) =>{
  res.render('form');
});

const server = app.listen(8000, () =>
console.log(`el server esta usando el puerto: ${server.address().port}!`)
);