var express = require('express');
var router = express.Router();
var mainController = require('./controllers/main.controller');

module.exports = router;

// Setup routes
router.get('/', mainController.home);
router.get('/api/v1.0/precipitation', mainController.apiPrecip);
router.get('/api/v1.0/stations', mainController.apiStations);
router.get('/api/v1.0/tobs', mainController.apiTobs);
router.get('/api/v1.0/temp/:start', mainController.apiStartTemp);
router.get('/api/v1.0/temp/:start/:end', mainController.apiStartEndTemp);
// router.get('/api/v1.0/tobs/:time/:date', mainController.reservation);
// router.get('/api/availableTimes/:date', mainController.availableTimesApi);