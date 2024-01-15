const mongoose = require("mongoose");

const url = process.env.MONGODB_URL;


const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connection to DB is successfull");
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
};

module.exports = connectDB;
