const express = require("express");
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/catalogue", {
  useNewUrlParser: true
});

const db = require("./models");

// Express server on port 3000 (http://localhost:3000)
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse the body of the request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Catalogue API"
  });
});

// GET /api/items
app.get("/api/items", (req, res) => {
  db.Item.findOne({
    name: req.params.name
  })
    .then(function (dbItem) {
      res.json(dbItem);
    })
    .catch((err) => res.status(422).json(err));
});

// Start the server
app.listen(PORT, function () {
  console.log(`API Server now listening on PORT ${PORT}!`);
});
