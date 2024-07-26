const express = require("express");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { UserModel } = require("../model/user.model");

userRouter.post("/register", async (req, res) => {
  const { username, email, pass } = req.body;
  try {
    bcrypt.hash(pass, 5, async (err, hash) => {
      const user = new UserModel({ username, email, pass: hash });
      await user.save();
      res
        .status(200)
        .send({
          msg: "The new user has been registered",
          registeredUser: user,
        });
    });
  } catch (error) {
    res.status(400).send({ error: error });
  }
});
userRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(pass, user.pass, (err, result) => {
        if (result) {
          res
            .status(200)
            .send({
              msg: "Login successful!",
              token: jwt.sign(
                { userId: user._id, username: user.username },
                "masai"
              ),
            });
        }
        // result == true
      });
    } else {
      res.status(200).send({ msg: "Wrong Credentials" });
    }
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

module.exports = {
  userRouter,
};
