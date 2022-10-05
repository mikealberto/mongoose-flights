module.exports = { get, new: newFlight };

function get(req, res) {
  res.render("flights/index");
}

function newFlight(req, res) {
  res.render("flights/new");
}
