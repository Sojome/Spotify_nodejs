const dbConnection = require('../../config/dbConnection');

module.exports = app => {

  const connection = dbConnection();

  app.get('/insomnia1', (req, res) => {
    connection.query("SELECT * FROM reporte_de_canciones_mas_escuchados", 
    function(err,rows) {
      if (err) {
        res.send(err);
      } else {
        res.send(rows);
      }
    });
  });

  app.get("/insomnia2", (req, res) => {
    connection.query("SELECT * FROM reporte_de_ingresos_de_usuarios",
    function(err,rows) {
      if (err) {
        res.send(err);
      } else {
        res.send(rows);
      }
    });
  });

  app.get("/insomnia3", (req, res) => {
    connection.query("SELECT * FROM reporte_creada_por_el_estudiante",
    function(err,rows) {
      if (err) {
        res.send(err);
      } else {
        res.send(rows);
      }
    });
  });
  
};
