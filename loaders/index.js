const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const initLoaders = app => {
  if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'));
  }

  app.use(express.json());
  app.use(cookieParser());
};

module.exports = initLoaders;
