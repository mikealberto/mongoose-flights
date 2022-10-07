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

//Note: we are not compromising seperation of concerns ;
//we are doing data manipulation to incoming form data, not any data that our app revolves around of
function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }
  //creates our flight in memory not in our database
  const flight = new Flight(req.body);
  //to save it in our database
  flight.save(function (err) {
    //if we don't redirect, the new page will be shown
    // with /flights in the address bar
    if (err) return res.redirect("/flights/new");
    console.log(req.body);
    res.redirect("/flights");
  });
}
