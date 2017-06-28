'use strict';

module.exports = function(app) {
  var flight = require('../controllers/flight');
  var passenger = require('../controllers/passenger');

  app.route('/flights')
    .get(flight.list_all_flight)     //Consulta todos os vôos
    .post(flight.create_a_flight);   //Cria um vôo

  app.route('/flights/:flightId')     //Rodas passando o ID do vôo
    .get(flight.read_a_flight)       //Consulta o vôo
    .put(flight.update_a_flight)     //Atualiza o vôo
    .delete(flight.delete_a_flight); //Deleta o vôo

  app.route('/passengers')
    .get(passenger.list_all_passenger)      //Consulta todos passageiros
    .post(passenger.create_a_passenger);    //Cria um passageiro

  app.route('/passengers/:passengerId')      //Rotas passando o ID do passageiro
    .get(passenger.read_a_passenger)        //Consulta o passageiro
    .put(passenger.update_a_passenger)      //Atualiza o passageiro
    .delete(passenger.delete_a_passenger);  //Deleta o passageiro

};
