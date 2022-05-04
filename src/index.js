const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const app = express()

// Morgan http logger
app.use(morgan('combined'))

// Templete engine

app.engine('.hbs', engine({extname: '.hbs'}));

app.set('view engine', '.hbs');

app.set("views", path.join(__dirname, 'resources/views'));

app.get('/trang-chu', (req, res) => {
  res.render('home');
});



app.get('/dang-ky', (req, res) => {
  res.render('signIn');
});

app.listen(3000)