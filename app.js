require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const usersRouter = require("./routes/users");
const categoriesRouter = require("./routes/categories");
const authRouter = require("./routes/auth-users");

const app = express();

app.use(bodyParser.json());

app.use("/auth", authRouter);
app.use("/user", usersRouter);
app.use("/categories", categoriesRouter);
app.use("/healthchek", (req, res, next) => {
  res.status(200);
  res.send("OK");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}... `);
});
