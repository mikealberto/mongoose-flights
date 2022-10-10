const Ticket = require("../models/ticket");
// const Flight = require("../models/flight")
module.exports = {new: newTicket, create};

function newTicket (req, res) {
    // console.log(req.params.id) //DELETE
    res.render("tickets/new", {title: "New Ticket", flightId: req.params.id});
}

function create(req, res) {
    console.log(req.body) //DELETE
    res.redirect(`/flights/${req.params.id}`);
}