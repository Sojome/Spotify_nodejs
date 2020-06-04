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

};
