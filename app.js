const express = require("express");
const bodyParser = require("body-parser");

const todoRouter = require("./routes/todo-router");
const listsRouter = require("./routes/lists-router");

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log(req.body);
  next();
});
app.use("/todo", todoRouter);
app.use("/lists", listsRouter);
app.use("/healthchek", (req, res, next) => {
  res.status(200);
  res.send("OK");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}... `);
});
