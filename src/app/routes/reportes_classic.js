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

  app.get('/class3', (req, res) => {
    connection.query('SELECT * FROM list_order', (err, result) => {
      res.render('reportes/class3', {
        class3: result
      });
    });    
  });

  app.post('/class3', (req, res) => {
    // Order
    var a1=req.body.new_orderNumber;
    var a2=req.body.new_orderDate;
    var a3=req.body.new_requiredDate;
    var a4=req.body.new_shippedDate; // opcional
    var a5=req.body.new_status;
    var a6=req.body.new_comments; // opcional
    //var a7=req.body.new_customerNumber;
    var a7=103;
    // Order details
    //var a8=req.body.new_productCode;
    var a8='S18_1749';
    var a9=req.body.new_quantityOrdered;
    var a10=req.body.new_priceEach;
    var a11=req.body.new_orderLineNumber;
    if(a1 !== undefined 
      && a2!== undefined
      && a3!== undefined
      && a5!== undefined
      && a7!== undefined
      && a8!== undefined
      && a9!== undefined
      && a10!== undefined
      && a11!== undefined
      ){
      connection.query(`call Ordernar_producto('${a1}','${a2}','${a3}','${a4}','${a5}','${a6}','${a7}','${a8}','${a9}','${a10}','${a11}')`,
      function(err,rows) {
        if(err) {
          console.log(err);
        } else {
            res.redirect('/class3');
        }
      })
    }
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