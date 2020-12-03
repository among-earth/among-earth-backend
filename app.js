const express = require('express');

const indexRouter = require('./routes');
const usersRouter = require('./routes/users');

const initLoaders = require('./loaders');

const app = express();

initLoaders(app);

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
