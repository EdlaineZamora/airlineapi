'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PassengerSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the name of the Passenger'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Passenger', PassengerSchema);
