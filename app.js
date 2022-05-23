const express = require("express");

const datos = require("./public/menuDataBase.json");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

// Rutas
const index = require("./routers/main");
const detalleMenu = require("./routers/main");
const menu = require("./routers/menu");

app.use(express.static("public"));
app.use("/", index);
app.use("/detalleMenu", detalleMenu);
app.use("/detalle/:id", menu);

app.get("/home", (req, res) => {
  res.render("home", { datos });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor funcionando");
});
