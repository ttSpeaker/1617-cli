const prisma = require("./prisma-client");

const getCategoriesForUser = async (id) => {
  try {
    const categories = await prisma.category.findMany({
      where: { userId: id },
    });
    return categories;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const create = async (title, description, userId) => {
  try {
    const result = await prisma.category.create({
      data: {
        title: title,
        description: description,
        users: {
          connect: [{ id: userId }],
        },
      },
    });
  } catch (err) {
    throw err;
  }
};
module.exports = { getCategoriesForUser, create };
