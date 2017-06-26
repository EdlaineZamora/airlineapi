'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Passenger = require('./passenger');

var FlightSchema = new Schema({
  airplaneNumber: {
    type: Number,
    Required: 'Kindly enter the airplaneNumber of the flight'
  },
  passengers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Passenger'
  }],
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Flight', FlightSchema);
