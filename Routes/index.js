const express = require("express");
const authRoutes = require("./");
const categoryRoutes = require(".CategoryRoutes");
const ProductRoutes = require("./");
const Routes = express.Router();
//

Routes.use("/auth", authRoutes);
Routes.use("/Category", categoryRoutes);
Routes.use("/Product", ProductRoutes);

module.exports = Routes;
