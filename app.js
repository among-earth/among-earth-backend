const express = require('express');
const createError = require('http-errors');

const directionsRouter = require('./routes/directions');
const travelRouter = require('./routes/travel');
const { ROUTE } = require('./configs/constants');

const initLoaders = require('./loaders');

const app = express();

initLoaders(app);

app.use(ROUTE.DIRECTIONS, directionsRouter);
app.use(ROUTE.TRAVELS, travelRouter);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    console.log(err);
  }

  res.status(err.status || 500);
  res.json(err);
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on PORT ${process.env.PORT || 5000}`);
});

module.exports = app;
