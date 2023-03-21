const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

const hbs = require('express-handlebars');

// HTTP logger
// app.use(morgan('combined'))

// Template engine
app.engine(
    'hbs',
    hbs.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Route init
route(app);

app.listen(port, () => console.log(`Example app listening on port ${port}`));
