var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  mongoose = require('mongoose'),
  Flight = require('./api/models/flight'),
  Passenger = require('./api/models/passenger'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://edlaine:mongodbedlaine@ds139072.mlab.com:39072/airlinedb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/airline');
routes(app);

app.listen(port);

console.log('ariline API server started on: ' + port);
