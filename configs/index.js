require('dotenv').config();

module.exports = {
  corsOptions: {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200,
  },
  awsOptions: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
    bucket: process.env.AWS_BUCKET_NAME,
  },
  googleOptions: {
    key: process.env.GOOGLE_API_KEY,
  },
};
