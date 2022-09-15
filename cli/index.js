const prompts = require("prompts");
const files = require("./files");

const run = async () => {
  const commandSelected = await prompts({
    type: "select",
    name: "value",
    message: "Commands",
    choices: [
      {
        title: "Create user",
        description: "Create new user profile",
        value: "create",
      },
      { title: "List users", description: "List all users", value: "list" },
    ],
    initial: 0,
  });

  if (commandSelected.value == "create") {
    const userData = await prompts([
      {
        type: "text",
        name: "name",
        message: "User name: ",
      },
      { type: "text", name: "password", message: "Password: " },
    ]);
    const users = await files.readFilePromise();
    users.push(userData);
    await files.writeFilePromise(users);
    return;
  }
  if (commandSelected.value == "list") {
    const users = await files.readFilePromise();
    console.log(users);
    return;
  }
};
run();
