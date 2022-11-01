const userRepository = require("../repositories/users");

const retrieveUserById = async (id) => {
  try {
    const user = await userRepository.getById(id);
    return user;
  } catch (err) {
    throw err;
  }
};

const createUser = async (name, email) => {
  // VALIDAR DATOS..
  try {
    await userRepository.create(name, email);
    return;
  } catch (err) {
    throw err;
  }
};

// const updateTodo = async (id, data) => {
//   const todosList = await repository.retrieve("todos");
//   for (let i = 0; i < todosList.length; i++) {
//     if (todosList[i].id === editId) {
//       todosList[i] = todoUpdateData;
//     }
//   }
//   await repository.save("todos", todosList);
//   return;
// };

// const deleteTodo = async (id) => {
//   const todosList = await repository.retrieve("todos");
//   for (let i = 0; i < todosList.length; i++) {
//     if (id === todosList[i].id) {
//       todosList.splice(i, 1);
//     }
//   }
//   await repository.save("todos", todosList);
// };

// const retrieveAllTodos = async () => {
//   return await repository.retrieve("todos");
// };

module.exports = {
  retrieveUserById,
  createUser,
};
