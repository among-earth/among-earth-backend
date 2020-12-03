const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('respond with a resource in index');
});

module.exports = router;
