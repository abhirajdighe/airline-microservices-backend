const express = require('express');
const {FlightMiddlerwares} = require('../../middlewares/index')

const CityController = require('../../controllers/city-controller');
const AirportController = require('../../controllers/airport-controller');
const FlightController = require('../../controllers/flight-controller')

const router = express.Router();
// Routes of City:
router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll);
router.patch('/city/:id',CityController.update);


// Routes of Airports:
router.get('/airport/:id',AirportController.get);
router.post('/airport',AirportController.create);
router.delete('/airport/:id',AirportController.destroy);
router.patch('/airport/:id',AirportController.update);


// Routes of Flights:
router.post(
    '/flights',
    // FlightMiddlerwares.validateFlight,
    FlightController.create
);

router.get('/flights',FlightController.getAll);
router.get('/flights/:id',FlightController.get);
router.patch('/flights/:id',FlightController.update)

module.exports= router;