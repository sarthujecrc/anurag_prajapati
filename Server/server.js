const express = require("express");
const config = require("../config/default.js");
const startServer = async (app) => {
  try {
    const { HOST, PORT } = config;
    app.listen(PORT, () => {
      console.log(`app is running on http://${HOST}:${PORT}`);
    });
  } catch (error) {
    process.exit(1);
  }
};

module.exports = startServer;
