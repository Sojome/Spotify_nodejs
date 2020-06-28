const dbConnection = require('../../config/dbConnection_classic');

module.exports = app => {

  const connection = dbConnection();

  app.get('/class1', (req, res) => {
    connection.query('SELECT * FROM productos_mas_vendidos', (err, result) => {
      res.render('reportes/class1', {
        class1: result
      });
    });
  });

  app.set('view engine', 'ejs')
  app.get('/class2', (req, res) => {
    res.render('reportes/class2',  { posts: '' });
  })

  app.post('/class2', (req, res) => {
    //console.log(req.body);
    //const { fecha_inicio, fecha_fin } = req.body;
    var fecha1=req.body.fecha_inicio;
    var fecha2=req.body.fecha_fin;
    if(fecha1 !== undefined && fecha2!== undefined){
      connection.query(`call clientes_compras('${fecha1}','${fecha2}')`,
      function(err,rows) {
        if(err) {
            //console.log(err);
            res.render('reportes/class2_post',{data:''});
        } else {
            res.render('reportes/class2_post',{data:rows[0]});
        }
      })
    }else{
    }
  });

}