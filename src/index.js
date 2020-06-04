const app = require("./config/server");

require("./app/routes/reporte3")(app);
require("./app/routes/reporte2")(app);
require("./app/routes/reporte1")(app);
require("./app/routes/home")(app);

// starting the server
app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});
