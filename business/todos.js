const repository = require("../repositories/files-repository");

const retrieveTodoById = async (id) => {
  const todosList = await repository.retrieve("todos");
  let result;
  todosList.forEach((todo) => {
    if (id === todo.id) {
      result = todo;
    }
  });
  return result;
};

const createTodo = async (todo) => {
  const todosList = await repository.retrieve("todos");
  todosList.push(todo);
  await repository.save("todos", todosList);
  return;
};

const updateTodo = async (id, data) => {
  const todosList = await repository.retrieve("todos");
  for (let i = 0; i < todosList.length; i++) {
    if (todosList[i].id === editId) {
      todosList[i] = todoUpdateData;
    }
  }
  await repository.save("todos", todosList);
  return;
};

const deleteTodo = async (id) => {
  const todosList = await repository.retrieve("todos");
  for (let i = 0; i < todosList.length; i++) {
    if (id === todosList[i].id) {
      todosList.splice(i, 1);
    }
  }
  await repository.save("todos", todosList);
};

const retrieveAllTodos = async () => {
  return await repository.retrieve("todos");
};

module.exports = {
  retrieveTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
  retrieveAllTodos,
};
