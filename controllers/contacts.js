const contacts = require("../data/contacts");

const list = (req, res) => {
  res.json(contacts);
};

const show = (req, res) => {
  const id = req.params.id;
  const contact = contacts.find(contact => contact._id === Number(id));
  res.json(contact);
};

var counter = 6;
const create = (req, res) => {
  let contact = req.body;
  contact._id = counter;
  contacts.push(contact);
  res.send(JSON.stringify(contact));
  counter++;
};

module.exports = {
  list,
  create,
  show
};
