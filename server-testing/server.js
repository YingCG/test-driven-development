const express = require("express");
const path = require("path");

const fruitData = require("./fruits");

const server = express();
module.exports = server;

// Static folder (for html, css, images etc.)
const staticPath = path.join(__dirname, "public");
server.use(express.static(staticPath));

// Tell Express how to process the body of POST routes
server.use(express.urlencoded({ extended: false }));

// Simple GET routes
server.get("/", (req, res) => {
  res.json(fruitData);
  // res.send(`
  //   <h1>Welcome to the Fruit Club</h1>
  //   <ul>
  //     <li><a href="/about">About us</a></li>
  //     <li><a href="/index.html">Favourite fruit?</a></li>
  //   </ul>
  // `);
});

server.get("/about", (req, res) => {
  res.send("<h1>We love fruits</h1>");
});

// GET route to retrieve all fruits
server.get("/allFruits", (req, res) => {
  res.json(fruitData);
});

// URL Params
server.get("/fruits/:id", (req, res) => {
  const id = Number(req.params.id);

  const foundFruit = fruitData.find((fruit) => fruit.id === id);

  res.send(foundFruit);
});

//POST route
server.post("/favFruit", (req, res) => {
  const { fruitName } = req.body;

  const foundFruit = fruitData.find((fruit) =>
    // fruit.name.trim().toLowerCase() === fruitName.trim().toLowerCase()
    fruit.name.trim().toLowerCase().includes(fruitName.trim().toLowerCase())
  );

  if (foundFruit && foundFruit.id) {
    console.log("foundFruit:", foundFruit);
    res.redirect(`/fruits/${foundFruit.id}`);
  } else {
    console.log("Fruit not found:", fruitName);
    res.status(404).send("Fruit not found");
  }
});
