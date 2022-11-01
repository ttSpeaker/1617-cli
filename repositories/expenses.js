const prisma = require("./prisma-client");

const getExpensesForUser = async (id) => {
  try {
    const expenses = await prisma.expenses.findMany({
      where: { userId: id },
    });
    return expenses;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
