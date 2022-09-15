const express = require("express");
const bodyParser = require("body-parser");

const todoRouter = require("./routes/todo-router");
const listsRouter = require("./routes/lists-router");

const app = express();

app.use(bodyParser.json());

app.use("/todo", todoRouter);
app.use("/lists", listsRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}... `);
});
