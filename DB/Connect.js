const mongoose = require("mongoose");
const config = require("../config/default.js");
const ConnectDb = async () => {
  try {
    await mongoose.connect(config.URL).then(() => {
      console.log(`app is connected to database`);
    });
  } catch (error) {
    process.exit(1);
  }
};

module.exports = ConnectDb;
