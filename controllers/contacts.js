const comments = require("../data/comments");

const list = (req, res) => {
  res.json(contacts);
};

const show = (req, res) => {
  const id = req.params.id;
  const contact = contacts.find(contact => contact._id === Number(id));
  res.json(contact);
};

const create = (req, res) => {
  contacts.push({
    _id: (counter += 1),
    postId: 1,
    ...req.body
  });
};

module.exports = {
  list,
  create,
  show
};
