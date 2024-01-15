const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send("THis is the logic of controller here");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExists = await User.findOne({ email: email });

    if (userExists) {
      res.status(400).json({ message: "Email already exists. Use other email" });
    } else {
      const userCreated = await User.create({
        username,
        email,
        phone,
        password,
      });
      res.status(201).json({
        message: "Registration successfull",
        token: await userCreated.generateToken(),
        userId: userCreated._id.toString(),
      });
    }
  } catch (err) {
    console.log(err);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExists = await User.findOne({ email: email });

    if (!userExists) {
      res.status(400).json({ message: "Invalid Login Credentials" });
    } else {
      const userPass = await userExists.comparePassword(password);

      if (userPass) {
        res.status(200).json({
          message: "Login Successfull",
          token: await userExists.generateToken(),
          userId: userExists._id,
        });
      } else {
        res.status(400).send({ message: "Invalid Login Credentials" });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

// Sendnig user data to Front End
const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json(userData);
  } catch (error) {
    res.send(`error from user router ${error}`);
  }
};
module.exports = { home, register, login, user };
