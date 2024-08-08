const dotenv = require("dotenv");
dotenv.config();

const config = {
  URL: process.env.mongodb_url,
  PORT: process.env.port,
  SECRET_KEY: process.env.secret_key,
  HOST: process.env.host,
  CLOUD_NAME: process.env.cloud_name,
  API_KEY: process.env.api_key,
  API_SECRET: process.env.api_secret,
};

module.exports = config;
