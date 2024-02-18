const express = require ('express');

const router = express.Router();

const { getServiceRegistrations} = require('../controllers/serviceRegistration.controller');


router.route('/').post( getServiceRegistrations);

module.exports = router;