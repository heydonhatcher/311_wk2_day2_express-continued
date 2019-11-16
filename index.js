const express = require("express");
const bodyParser = require("body-parser");
const comments = require("./data/comments");
const contacts = require("./data/contacts");
const products = require("./data/products");
const vehicles = require("./data/vehicles");
const app = express();

const port = process.env.PORT || 4001;
let counter = contacts.length;

app.use(express.static("public"));
app.use(bodyParser.json());

router.get("/contacts");

app.get("/comments", (req, res) => {
  res.json(comments);
});

app.get("/comments/:id", (req, res) => {
  const id = req.params.id;
  const match = comments.find(comment => comment._id === Number(id));
  res.json(match);
});

// app.get("/contacts", (req, res) => {
//   res.json(contacts);
// });

// app.get("/contacts/:id", (req, res) => {
//   const id = req.params.id;
//   const contact = contacts.find(contact => contact._id === Number(id));
//   res.json(contact);
// });

// app.post("/contacts", (req, res) => {
//   contacts.push({
//     _id: (counter += 1),
//     postId: 1,
//     ...req.body
//   });
// });

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find(product => product._id === Number(id));
  res.json(product);
});

app.get("/vehicles", (req, res) => {
  res.json(vehicles);
});

app.get("/vehicles/:id", (req, res) => {
  const id = req.params.id;
  const vehicle = vehicles.find(vehicle => vehicle._id === Number(id));
  res.json(vehicle);
});

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
