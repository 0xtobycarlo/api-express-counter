const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

app.use(morgan("dev"));
app.use(cors());

const port = 3030;

app.listen(port, () => {
  console.log(`Server is running on https://localhost:${port}/`);
});

app.get("/", (req, res) => {
  console.log("Got request!");
  res.send("Hello World!");
});

let counter = 0;

app.get("/counter", (req, res) => {
  res.json({ counter: counter });
});

app.post("/counter/increment", (req, res) => {
  counter++;
  res.json({ counter: counter });
});

app.post("/counter/decrement", (req, res) => {
  counter--;
  res.json({ counter: counter });
});

app.post("/counter/double", (req, res) => {
  counter *= 2;
  res.json({ counter: counter });
});

app.delete("/counter", (req, res) => {
  counter = 0;
  res.json({ counter: counter });
});

app.put("/counter", (req, res) => {
  if (!req.query.value) {
    res.json({ counter: counter });
  }
  counter = Number(req.query.value);
  res.json({ counter: counter });
});
