require('dotenv').config();

module.exports = {
  corsOptions: {
    origin:
      process.env.NODE_ENV === 'production' ?
      'https://www.among-earth.site' :
      'http://localhost:443',
    optionsSuccessStatus: 200,
  },
};
