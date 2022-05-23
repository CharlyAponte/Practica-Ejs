const controllers = {
  index: (req, res) => {
    res.render("index");
  },
  detalleMenu: (req, res) => {
    res.render("detalleMenu");
  },
};

module.exports = controllers;
