const products = require("../data/products");

const list = (req, res) => {
  res.json(products);
};

const show = (req, res) => {
  const id = req.params.id;
  const product = products.find(product => product._id === Number(id));
  res.json(product);
};

var counter = 11;
const create = (req, res) => {
  let product = req.body;
  product._id = counter;
  products.push(product);
  res.send(JSON.stringify(product));
  counter++;
};

module.exports = {
  list,
  create,
  show
};
