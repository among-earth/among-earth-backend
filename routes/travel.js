const express = require('express');
const multer = require('multer');
const AWS = require('aws-sdk');

const router = express.Router();
const upload = multer();

const { awsOptions } = require('../configs');
const { listPhotos } = require('../utils/listPhotos');

AWS.config.region = awsOptions.region;

router.get('/', async (req, res, next) => {
  try {
    const s3 = new AWS.S3();

    const params = {
      Bucket: awsOptions.bucket,
    };

    s3.listObjectsV2(params, async (err, data) => {
      try {
        let list = [];

        for (let i = 0; i < data.Contents.length; i++) {
          const { Key, LastModified } = data.Contents[i];

          const imageInfo = { path: Key, time: LastModified };
          list.push(imageInfo);
        }

        res.status(200).send(list);
      } catch (err) {
        next(err);
      }
    });
    // const photoList = await listPhotos();

    // res.status(200).send(photoList);
  } catch (err) {
    next(err);
  }
});

router.post('/:travel_id', upload.single('travelImage'), async (req, res, next) => {
  let info = req.body;

  try {
    const image = req.file;

    const s3bucket = new AWS.S3({
      accessKeyId: awsOptions.accessKeyId,
      secretAccessKey: awsOptions.secretAccessKey,
      region: awsOptions.region,
    });

    const params = {
      Bucket: awsOptions.bucket,
      Key: image.originalname,
      Body: image.buffer,
      ContentType: image.mimetype,
      ACL: 'public-read',
    };

    s3bucket.upload(params, (err, data) => {
      if (err) {
        console.log(`image upload err : ${err}`);
        return;
      }

      const newFileUploaded = {
        description: info.points,
        se_key: params.Key,
      };

      info = { ...info, photo: newFileUploaded };
    });

    res.status(200).send(info);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
