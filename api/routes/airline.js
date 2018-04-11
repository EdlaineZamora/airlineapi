'use strict';

module.exports = function(app) {
  var flight = require('../controllers/flight');
  var passenger = require('../controllers/passenger');

  app.route('/flights')
    .get(flight.list_all_flight)
    .post(flight.create_a_flight);

  app.route('/flights/:flightId')
    .get(flight.read_a_flight)
    .put(flight.update_a_flight)
    .delete(flight.delete_a_flight);

  app.route('/passengers')
    .get(passenger.list_all_passenger)
    .post(passenger.create_a_passenger);

  app.route('/passengers/:passengerId')
    .get(passenger.read_a_passenger)
    .put(passenger.update_a_passenger)
    .delete(passenger.delete_a_passenger);

};
