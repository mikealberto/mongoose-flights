const Ticket = require("../models/ticket");
// const Flight = require("../models/flight")
module.exports = {new: newTicket};

function newTicket (req, res) {
    console.log(req.params.id) //DELETE
    res.render("tickets/new", {title: "New Ticket"});
}