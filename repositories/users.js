const prisma = require("./prisma-client");

const create = async (name, email, password) => {
  try {
    await prisma.user.create({
      data: { name: name, email: email, password: password },
    });
  } catch (err) {
    throw err;
  }
};

const getById = async (id, requireExpenses, requireCategories) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: id },
      include: { categories: requireCategories, expenses: requireExpenses },
    });
    return user;
  } catch (err) {
    throw err;
  }
};

const findByEmail = async (email) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
    });
    return user;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  create,
  getById,
  findByEmail,
};
