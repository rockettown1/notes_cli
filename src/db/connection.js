require("dotenv").config();
const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Successfully connecte to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connection;
