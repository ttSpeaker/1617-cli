const express = require("express");

const business = require("../business/categories");

const categoriesRouter = express.Router();

categoriesRouter.post("/", async (req, res) => {
  try {
    const title = req.body.title;
    const description = req.body.description;
    const userId = req.body.userId;
    await business.createCategory(title, description, userId);
    res.send("OK");
  } catch (error) {
    console.log(error);
    res.status = 500;
    res.send(error.message);
  }
});

module.exports = categoriesRouter;
