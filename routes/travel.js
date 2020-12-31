const express = require('express');
const router = express.Router();
const multer  = require('multer');
const upload = multer();
const AWS = require("aws-sdk");

AWS.config.region = 'ap-northeast-2';

router.get('/', async (req, res, next) => {
  try {
    const s3 = new AWS.S3();

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
    };

    s3.listObjectsV2(params, async (err, data) => {
      try {
        let list = [];

        for(let i = 0; i < data.Contents.length; i++) {
          const { Key, LastModified } = data.Contents[i];

          const imageInfo = { path: Key, time: LastModified };
          list.push(imageInfo);
        }

        res.status(200).send(list);
      } catch (err) {
        console.log(err);
      }
    });
  } catch(err) {
    console.log(err);
  }
});

router.post('/:travel_id', upload.single('travelImage'), async (req, res, next) => {
  let info = req.body;

  try {
    const image = req.file;

    const s3bucket = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION
    });

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: image.originalname,
      Body: image.buffer,
      ContentType: image.mimetype,
      ACL: 'public-read',
    };

    s3bucket.upload(params, async (err, data) => {
      try {
        if(err) console.log(err);

        const newFileUploaded = {
          description: info.points,
          se_key: params.Key,
        };

        info = { ...info, photo: newFileUploaded};

        res.status(200).send(info);
      } catch(err) {
        console.log(err);
      }
    });
  } catch(err) {
    console.log(err);
  }
});

module.exports = router;
