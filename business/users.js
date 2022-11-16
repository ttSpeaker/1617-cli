const userRepository = require("../repositories/users");
const searchUserByEmail = async (email) => {
  try {
    const user = await userRepository.findByEmail(email);
    if (user) {
      return user;
    }
    return null;
  } catch (err) {
    throw err;
  }
};
const retrieveUserById = async (id, requireExpenses, requireCategories) => {
  try {
    const user = await userRepository.getById(
      id,
      stringToBool(requireExpenses),
      stringToBool(requireCategories)
    );
    if (user) {
      return user;
    }
    return null;
  } catch (err) {
    throw err;
  }
};

const createUser = async (name, email, password) => {
  // VALIDAR DATOS..
  try {
    const user = await userRepository.create(name, email, password);
    return user;
  } catch (err) {
    throw err;
  }
};

const stringToBool = (text) => {
  return text.toLowerCase() === "true";
};
module.exports = {
  retrieveUserById,
  searchUserByEmail,
  createUser,
};
