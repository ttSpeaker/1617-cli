const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const authRouter = express.Router();
const business = require("../business/users");

authRouter.post("/register", async (req, res) => {
  try {
    const userBody = req.body;
    // validar que el email no exista ya! es

    const hash = await bcrypt.hash(userBody.password, 10);

    const user = await business.createUser(userBody.name, userBody.email, hash);
    console.log(user);
    res.send("OK");
  } catch (error) {
    console.log(error);
    res.status = 500;
    res.send(error.message);
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const loginData = req.body;

    // validar que el email llego
    const user = await business.searchUserByEmail(loginData.email);
    if (user) {
      const result = await bcrypt.compare(loginData.password, user.password);

      if (result) {
        const token = await jwt.sign(
          {
            name: user.name,
            email: user.email,
            role: user.role,
          },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: 50 }
        );

        res.json({ token: token });
        return;
      }
    }
    res.status(403).json({ message: "user not authorized" });
    return;
  } catch (error) {
    console.log(error);
    res.status = 500;
    res.send(error.message);
  }
});

authRouter.get("/confidencial", async (req, res) => {
  const tokenHeader = req.headers["authorization"];
  if (!tokenHeader) {
    res.status(401).send("missing token");
  }
  const token = tokenHeader.split(" ")[1];
  try {
    const data = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (data.role === "admin") {
      res.send(data);
      return;
    }
    res.status(403).send("not authorized");
    return;
  } catch (error) {
    console.log(error);
    res.status(401).send("invalid token");
    return;
  }
});

module.exports = authRouter;
