const express = require("express");
const flights = require("../controllers/flights");
const router = express.Router();
const flightsCtrl = require("../controllers/flights");

/* GET users listing. */
//all the routes already start with /flights
router.get("/", flightsCtrl.index);
router.get("/new", flightsCtrl.new);
router.post("/", flightsCtrl.create);

module.exports = router;
