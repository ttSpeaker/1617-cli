const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.post("/foo/:numerodelparametro/bar", (req, res) => {
  console.log(req.params);
  res.send("la ruta del foo");
});
app.use(bodyParser.json());


app.get("/bar", (req, res) => {
  res.send("la ruta del bar GET");
});

app.post("/bar", (req, res) => {
  console.log(req.body);
  res.send("la ruta del bar POSTEO");
});

app.use("/", (req, res) => {
  res.send("la ruta del / home");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
