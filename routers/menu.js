const express = require("express");
const route = express.Router();
const mainControllers = require("../controllers/mainControllers");

route.get("/detalle", mainControllers.menu);

module.exports = route;
