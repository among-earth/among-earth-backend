const express = require('express');
const router = express.Router();

const axios = require('axios');

router.get('/', async (req, res, next) => {
  const { lat, lng, id } = req.query;
  const bounds = 500;

  try {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${bounds}&type=tourist_attraction&key=${process.env.GOOGLE_API_KEY}`);
    const results = response.data.results;

    for (let i = 0; i < results.length; i++) {
      const { place_id } = results[i];

      if (place_id === id) results.splice(i, 1);
    }

    const recommends = results.splice(0, 6);

    return res.status(200).json(recommends);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
