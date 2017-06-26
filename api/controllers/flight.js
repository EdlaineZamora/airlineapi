'use strict';

var mongoose = require('mongoose'),
  Flight = mongoose.model('Flight');

exports.list_all_flight = function(req, res) {
  Flight.find({}, function(err, flight) {
    if (err) {
      res.send(err);
    }
    res.json(flight);
  });
};

exports.create_a_flight = function(req, res) {
  var new_flight = new Flight(req.body);
  new_flight.save(function(err, flight) {
    if (err) {
      res.send(err);
    }
    res.json(flight);
  });
};

exports.read_a_flight = function(req, res) {
  Flight.findById(req.params.flightId, function(err, flight) {
    if (err) {
      res.send(err);
    }
    res.json(flight);
  });
};

exports.update_a_flight = function(req, res) {
  Flight.findOneAndUpdate({_id: req.params.flightId},
    {$addToSet: {passengers: req.body.passengers}}, {new: true}, function(err, flight) {
    if (err) {
      res.send(err);
    }
    res.json(flight);
  });
};

exports.delete_a_flight = function(req, res) {
  Flight.remove({
    _id: req.params.flightId
  }, function(err, flight) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Flight successfully deleted' });
  });
};
