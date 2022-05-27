const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

const port = 3030;

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on https://localhost:${port}/`);
});

app.get("/", (req, res) => {
  console.log("Got request!");
  res.send("Hello World!");
});

let counter = 0;

app.get("/counter/:name", (req, res) => {
  const counter = counters[req.params.name];
  res.json({ counter: counter });
});

app.post("/counter/:name/increment", (req, res) => {
  counter[req.params.name]++;
  res.json({ counter: counters[req.params.name] });
});

app.post("/counter/:name/decrement", (req, res) => {
  counter[req.params.name]--;
  res.json({ counter: counters[req.params.name] });
});

app.post("/counter/:name/double", (req, res) => {
  counter[req.params.name] *= 2;
  res.json({ counter: counters[req.params.name] });
});

app.delete("/counter/:name", (req, res) => {
  counter[req.params] = 0;
  res.json({ counter: counter[req.params.name] });
});

app.put("/counter/:name", (req, res) => {
  if (!req.query.value) {
    res.json({ counter: counter });
  }
  counter = Number(req.query.value);
  res.json({ counter: counter });
});
