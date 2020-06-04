const dbConnection = require('../../config/dbConnection');

module.exports = app => {

  const connection = dbConnection();

  app.get('/reporte3', (req, res) => {
    connection.query('SELECT * FROM reporte_creada_por_el_estudiante', (err, result) => {
      res.render('reportes/reporte3', {
        reporte3: result
      });
    });
  });

};
