const express = require('express');
const router = express.Router();

const axios = require('axios');

router.get('/', async (req, res, next) => {
  const { lat, lng } = req.query;
  const bounds = 500;

  try{
    const response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${bounds}&rankby=distance&type=tourist_attraction&key=${process.env.GOOGLE_API_KEY}`);
    const results = response.data.results;

    const recommends = results.splice(0, 6)

    return res.status(200).json(recommends);
  } catch(err) {
    console.log(err);
  }
});

module.exports = router;
