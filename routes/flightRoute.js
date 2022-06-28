const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.example);

router.get("/api/flights", controller.allFlight);

router.post("/api/flights", controller.addFlight);

router.get("/api/flights/:id", controller.getOneFlight);

router.delete("/api/flights/:id", controller.deleteOneFlight);

router.put("/api/flights/:id", controller.editOneFlight)

module.exports = router;

