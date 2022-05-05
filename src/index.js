const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const app = express()
const router = require('./routers')

// Morgan http logger
app.use(morgan('combined'))

// Templete engine
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set("views", path.join(__dirname, 'resources/views'));

// static file
app.use(express.static(path.join(__dirname, 'public')));

// dung de parser body trong phuong thuc post
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

router(app);

app.listen(3000);
