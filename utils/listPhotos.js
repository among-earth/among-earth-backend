const AWS = require('aws-sdk');

const { awsOptions } = require('../configs');

AWS.config.region = awsOptions.region;

exports.listPhotos = () => {
  const s3 = new AWS.S3();

  const params = {
    Bucket: awsOptions.bucket,
  };
  let list = [];

  s3.listObjectsV2(params, async (err, data) => {
    try {
      for (let i = 0; i < data.Contents.length; i++) {
        const { Key, LastModified } = data.Contents[i];

        const imageInfo = { path: Key, time: LastModified };
        list.push(imageInfo);
      }
    } catch (err) {
      console.error(err.message);
    }
  });

  return list;
};
