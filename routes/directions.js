const express = require('express');
const router = express.Router();

const directionsController = require('./controllers/directions.controller');
const { ROUTE } = require('../configs/constants');

router.get(ROUTE.DEFAULT, directionsController.getNearestPlaces);

module.exports = router;
