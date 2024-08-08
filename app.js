const express = require("express");
const app = express();
const cors = require("cors");
const ConnectDb = require("./DB/Connect.js");
const startServer = require("./Server/server.js");
const Routes = require("./Routes/index.js");
//
app.use(express.json());
app.use(cors());

ConnectDb();
startServer(app);
