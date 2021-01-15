const express = require('express');

const directionsRouter = require('./routes/directions');
const travelRouter = require('./routes/travel');

const initLoaders = require('./loaders');

const app = express();

initLoaders(app);

app.use('/directions', directionsRouter);
app.use('/travels', travelRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`);
});

module.exports = app;
