const categoriesRepository = require("../repositories/categories");
// const retrieveUserById = async (id, requireExpenses, requireCategories) => {
//   try {
//     const user = await userRepository.getById(
//       id,
//       stringToBool(requireExpenses),
//       stringToBool(requireCategories)
//     );
//     if (user) {
//       return user;
//     }
//     throw new Error("User not found");
//   } catch (err) {
//     throw err;
//   }
// };

const createCategory = async (title, description, userId) => {
  // VALIDAR DATOS..
  try {
    const category = await categoriesRepository.create(
      title,
      description,
      userId
    );
    return category;
  } catch (err) {
    throw err;
  }
};

const stringToBool = (text) => {
  return text.toLowerCase() === "true";
};
module.exports = {
  createCategory,
};
