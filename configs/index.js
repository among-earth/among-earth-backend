require('dotenv').config();

module.exports = {
  corsOptions: {
    origin:
      process.env.NODE_ENV === 'production' ?
      'https://www.among-earth.site' :
      'http://localhost:3000',
    optionsSuccessStatus: 200,
  },
};
