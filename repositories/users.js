const prisma = require("./prisma-client");

const create = async (name, email) => {
  try {
    await prisma.user.create({
      data: { name: name, email: email },
    });
  } catch (err) {
    throw err;
  }
};

const getById = async (id) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: id },
      include: { categories: false, expenses: true },
    });
    return user;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  create,
  getById,
};
