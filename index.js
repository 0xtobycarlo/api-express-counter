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
