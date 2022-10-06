const Flight = require("../models/flight");

module.exports = { index, new: newFlight, create };

function index(req, res) {
  Flight.find({}, function (err, flights) {
    res.render("flights/index", { flights });
  });
}

function newFlight(req, res) {
  res.render("flights/new");
}

function create(req, res) {
  // res.redirect("/flights");
  const flight = new Flight(req.body);
  // console.log(flight);
  flight.save(function (err) {
    if (err) return res.redirect("/flights/new");
    console.log(req.body);
    res.redirect("/flights/new");
  });
}
