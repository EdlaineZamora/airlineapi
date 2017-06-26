'use strict';

var mongoose = require('mongoose'),
  Passenger = mongoose.model('Passenger');

exports.list_all_passenger = function(req, res) {
  Passenger.find({}, function(err, passenger) {
    if (err) {
      res.send(err);
    }
    res.json(passenger);
  });
};

exports.create_a_passenger = function(req, res) {
  var new_passenger = new Passenger(req.body);
  new_passenger.save(function(err, passenger) {
    if (err) {
      res.send(err);
    }
    res.json(passenger);
  });
};

exports.read_a_passenger = function(req, res) {
  Passenger.findById(req.params.passengerId, function(err, passenger) {
    if (err) {
      res.send(err);
    }
    res.json(passenger);
  });
};

exports.update_a_passenger = function(req, res) {
  Passenger.findOneAndUpdate({_id: req.params.passengerId}, req.body, {new: true}, function(err, passenger) {
    if (err) {
      res.send(err);
    }
    res.json(passenger);
  });
};

exports.delete_a_passenger = function(req, res) {
  Passenger.remove({
    _id: req.params.passengerId
  }, function(err, passenger) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Passenger successfully deleted' });
  });
};
