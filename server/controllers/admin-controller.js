const User = require("../models/user-model");
const Contact = require("../models/contact-model");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().select({ password: 0 });

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No Users found" });
    }

    return res.status(200).json(users);
   
  } catch (error) {
    next(error);
  }
};

const getAllContacts = async (req, res, next) => {
  try {
    const allContacts = await Contact.find();

    if (!allContacts || allContacts.length === 0) {
      return res.status(404).json({ message: "No Contacts Found" });
    }
    return res.status(200).json({ msg: allContacts });
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllUsers, getAllContacts };
