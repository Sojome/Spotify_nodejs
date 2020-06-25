const dbConnection = require('../../config/dbConnection');

module.exports = app => {

  const connection = dbConnection();

  app.get('/reporte1', (req, res) => {
    connection.query('SELECT * FROM reporte_de_canciones_mas_escuchados', (err, result) => {
      res.render('reportes/reporte1', {
        reporte1: result
      });
    });
  });

  app.get('/reporte2', (req, res) => {
    connection.query('SELECT * FROM reporte_de_ingresos_de_usuarios', (err, result) => {
      res.render('reportes/reporte2', {
        reporte2: result
      });
    });
  });

  app.get('/reporte3', (req, res) => {
    connection.query('SELECT * FROM reporte_creada_por_el_estudiante', (err, result) => {
      res.render('reportes/reporte3', {
        reporte3: result
      });
    });
  });

};
