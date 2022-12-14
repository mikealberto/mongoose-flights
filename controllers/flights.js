const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = { index, new: newFlight, create, show };

function index(req, res) {
  Flight.find({}, function (err, flights) {
    res.render("flights/index", { flights, title: "All Flights" });
  });
}

function newFlight(req, res) {
  res.render("flights/new", { title: "New Flight" });
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
    res.redirect(`/flights/${flight._id}`);
  });
}

// function show(req, res) {
//   Flight.findById(req.params.id, function(err, flight) {
//     res.render("flights/show", {flight, title: "Flight Detail"})
//   });
// }
function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    Ticket.find({flight: flight._id}, function(err, tickets) {
      // console.log(tickets); //DELETE
      res.render("flights/show", {title:"Flight Detail", flight, tickets});
    });
  });
}
