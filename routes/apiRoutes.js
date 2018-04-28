var reservations = require('../data/reservationsData.js');
var tables = require('../data/tablesData.js');

module.exports = function(app) {
  //reservation JSON
  app.get('/api/reservations', function(req, res){
    res.json(reservations)
  })
  //tables JSON
  app.get('/api/tables', function(req, res){
    res.json(tables)
  })
  //POST
  app.post('/api/tables', function(req, res){
    let newCustomer = req.body
    newCustomer.routeName = newCustomer.name.replace(/\s+/g, '').toLowerCase()
    if(tables.length < 8) {
      tables.push(newCustomer)
      res.json(true)
    } else {
      reservations.push(req.newCustomer)
      res.json(false)
    }
    process.stdout.write('\x1B[2J\x1B[3J\x1B[H')
    console.log(tables)
  })
}