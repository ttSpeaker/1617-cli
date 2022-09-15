const fetch = require("node-fetch");

const run = async () => {
  try {
    const response = await fetch("https://github.com/");

    console.log(response);
  } catch (err) {
    console.error(err);
  }
  console.log("termine");
};

run();
