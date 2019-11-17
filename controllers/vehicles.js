const vehicles = require("../data/vehicles");

const list = (req, res) => {
  res.json(vehicles);
};

const show = (req, res) => {
  const id = req.params.id;
  const vehicle = vehicles.find(vehicle => vehicle._id === Number(id));
  res.json(vehicle);
};

var counter = 21;
const create = (req, res) => {
  let vehicle = req.body;
  vehicle._id = counter;
  vehicles.push(vehicle);
  res.send(JSON.stringify(vehicle));
  counter++;
};

module.exports = {
  list,
  create,
  show
};
