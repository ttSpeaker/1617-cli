const express = require("express");

const business = require("../business/users");

const usersRouter = express.Router();

usersRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const requireExpenses = req.query.expenses;
    const requireCategories = req.query.categories;

    const user = await business.retrieveUserById(
      id,
      requireExpenses,
      requireCategories
    );
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status = 500;
    res.send(error.message);
  }
});

module.exports = usersRouter;
