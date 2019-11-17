const comments = require("../data/comments");

const list = (req, res) => {
  res.json(comments);
};

const show = (req, res) => {
  const id = req.params.id;
  const comment = comments.find(comment => comment._id === Number(id));
  res.json(comment);
};

var counter = 5;
const create = (req, res) => {
  let comment = req.body;
  comment._id = counter;
  comments.push(comment);
  res.send(JSON.stringify(comment));
  counter++;
};

module.exports = {
  list,
  create,
  show
};
