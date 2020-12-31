require('dotenv').config();

module.exports = {
  corsOptions: {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
  },
  // databaseURL: process.env.MONGODB_URL,
  // mongooseOptions: {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  //   useFindAndModify: false,
  //   dbName: 'sool-tok',
  // },
};
