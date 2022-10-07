const Flight = require("../models/flight");
module.exports = {create};

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        console.log(req.body);
        //push subdoc into mongoose array
        flight.destinations.push(req.body);
        //save any changes mades to the flight doc
        flight.save(function(err) {
            //Responding to the req by redirecting if data has been changed
            res.redirect(`/flights/${flight._id}`)
        });
    });
}