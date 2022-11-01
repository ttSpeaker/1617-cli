const express = require("express");

const business = require("../business/users");

const usersRouter = express.Router();

usersRouter.post("/", async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    await business.createUser(name, email);
    res.send("OK");
  } catch (error) {
    res.status = 500;
    res.send(error.message);
  }
});

usersRouter.get("/:id", async (req, res) => {
  try {
    const id = +req.params.id;
    const user = await business.retrieveUserById(id);
    res.send(user);
  } catch (error) {
    res.status = 500;
    res.send(error.message);
  }
});

module.exports = usersRouter;
