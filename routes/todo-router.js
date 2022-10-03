const express = require("express");
const { v4: uuidv4 } = require("uuid");

const business = require("../business/todos");

const todoRouter = express.Router();

// /todo ...
todoRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const todo = await business.retrieveTodoById(id);
  res.send(todo);
});

todoRouter.post("/", async (req, res) => {
  const todo = {
    id: uuidv4(),
    title: req.body.title,
    description: req.body.description,
    done: req.body.done,
  };
  await business.createTodo(todo);
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
  await business.updateTodo(editId, todoUpdateData);
  res.send(todoUpdateData);
});

todoRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await business.deleteTodo(id);
  res.status(204).send();
});

todoRouter.get("/", async (req, res) => {
  const todos = await business.retrieveAllTodos();
  res.send(todos);
});

module.exports = todoRouter;
