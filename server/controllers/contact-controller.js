const Contact = require("../models/contact-model");

const contactForm = async (req, res) => {
  try {
    console.log(req.bod);
    const response = await req.body;
    await Contact.create(response);
    return res.status(201).json({ message: "Message sent successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Message not sent" });
  }
};

module.exports = contactForm;
