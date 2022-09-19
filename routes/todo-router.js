const express = require("express");
const { v4: uuidv4 } = require("uuid");

const filesMethods = require("../files-functions/files-mehods");

const todoRouter = express.Router();

// /todo ...
todoRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const todosList = await filesMethods.readFilePromise("todos");
  todosList.forEach((todo) => {
    if (id === todo.id) {
      res.send(todo);
      return;
    }
  });
});

todoRouter.post("/", async (req, res) => {
  const todo = {
    id: uuidv4(),
    title: req.body.title,
    description: req.body.description,
    done: req.body.done,
  };

  const todosList = await filesMethods.readFilePromise("todos");
  todosList.push(todo);
  await filesMethods.writeFilePromise("todos", todosList);

  res.send(todo);
});

todoRouter.put("/:id", async (req, res) => {
  const editId = req.params.id;
  const todoUpdateData = {
    id: editId,
    title: req.body.title,
    description: req.body.description,
    done: req.body.done,
  };
  const todosList = await filesMethods.readFilePromise("todos");

  for (let i = 0; i < todosList.length; i++) {
    if (todosList[i].id === editId) {
      todosList[i] = todoUpdateData;
    }
  }
  await filesMethods.writeFilePromise("todos", todosList);
  res.send(todoUpdateData);
});

todoRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const todosList = await filesMethods.readFilePromise("todos");
  for (let i = 0; i < todosList.length; i++) {
    if (id === todosList[i].id) {
      todosList.splice(i, 1);
    }
  }
  await filesMethods.writeFilePromise("todos", todosList);
  res.status(204).send();
});

todoRouter.get("/", async (req, res) => {
  const todosList = await filesMethods.readFilePromise("todos");
  res.send(todosList);
});

module.exports = todoRouter;
