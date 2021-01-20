const express = require('express');
const multer = require('multer');

const router = express.Router();
const upload = multer();

const travelsController = require('./controllers/travel.controller');
const { ROUTE, PHOTO } = require('../configs/constants');

router.get(ROUTE.DEFAULT, travelsController.getPhotoLists);
router.post(ROUTE.TRAVEL, upload.single(PHOTO.photoId), travelsController.uploadPhoto);

module.exports = router;
