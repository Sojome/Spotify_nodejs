const app = require("./config/server");

//Rutas
require("./app/routes/home")(app);
require("./app/routes/reportes_tabla")(app);
require("./app/routes/reportes_insomnia")(app);
require("./app/routes/reportes_classic")(app);

// starting the server
app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});
