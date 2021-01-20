const AWS = require('aws-sdk');

const { awsOptions } = require('../configs');

AWS.config.region = awsOptions.region;

exports.listPhotos = () => {
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

      return list;
    } catch (err) {
      console.error(err.message);
    }
  });
};
