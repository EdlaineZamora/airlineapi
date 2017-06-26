'use strict';

module.exports = function(app) {
  var flight = require('../controllers/flight');
  var passenger = require('../controllers/passenger');

  app.route('/flight')
    .get(flight.list_all_flight)
    .post(flight.create_a_flight);

  app.route('/flight/:flightId')
    .get(flight.read_a_flight)
    .put(flight.update_a_flight)
    .delete(flight.delete_a_flight);

  app.route('/passenger')
    .get(passenger.list_all_passenger)
    .post(passenger.create_a_passenger);

  app.route('/passenger/:passengerId')
    .get(passenger.read_a_passenger)
    .put(passenger.update_a_passenger)
    .delete(passenger.delete_a_passenger);

};
