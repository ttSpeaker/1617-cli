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
