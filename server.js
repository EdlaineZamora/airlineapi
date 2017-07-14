require("appdynamics").profile({
 controllerHostName: 'lights201707131419484.saas.appdynamics.com',
 controllerPort: 443,

 // If SSL, be sure to enable the next line
 controllerSslEnabled: true,
 accountName: 'lights201707131419484',
 accountAccessKey: '8ghuafjju76f',
 applicationName: 'airline',
 tierName: 'airline',
 nodeName: 'process' // The controller will automatically append the node name with a unique number
});

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  mongoose = require('mongoose'),
  Flight = require('./api/models/flight'),
  Passenger = require('./api/models/passenger'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://username:password@ds139072.mlab.com:39072/airlinedb', options);
var conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', function() {
  var routes = require('./api/routes/airline');
  routes(app);
});

app.listen(port);

console.log('ariline API server started on: ' + port);
