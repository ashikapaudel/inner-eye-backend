const express = require('express');
    const router = express.Router();
const {verifyJWT} = require('../middlewares/auth.middleware');
const {createService} = require('../controllers/service.controller');
const {getService} = require('../controllers/service.controller');
const {updateService} = require('../controllers/service.controller');
const {deleteService} = require('../controllers/service.controller');

router.route('/').post(verifyJWT,createService).get(verifyJWT,getService);
router.route('/id:').patch(updateService).post(deleteService);

module.exports = router; 