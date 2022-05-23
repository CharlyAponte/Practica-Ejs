const express = require("express");
const route = express.Router();
const mainControllers = require("../controllers/mainControllers");

route.get("/", mainControllers.index);
route.get("/detalleMenu", mainControllers.detalleMenu);

module.exports = route;
