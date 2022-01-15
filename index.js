var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.use(express.json())
var routes = require('./api/routes/todoListRoutes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});
app.listen(port);

console.log('todo list RESTful API server started on: ' + port);