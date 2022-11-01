const express = require("express");
const bodyParser = require("body-parser");

const usersRouter = require("./routes/users");


const app = express();

app.use(bodyParser.json());

app.use("/user", usersRouter);

app.use("/healthchek", (req, res, next) => {
  res.status(200);
  res.send("OK");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}... `);
});
