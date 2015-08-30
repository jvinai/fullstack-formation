'use strict';

var mongoose = require('mongoose'),
  bluebird = require('bluebird');

var MongooseRepository = function (config) {
  this.config = config;
  this.db = {};
};

MongooseRepository.prototype.init = function () {
  mongoose.connect(this.config.url);
  this.db = mongoose.connection;
  this.db.on('error', function (error) {
    console.log('Error during connection to MongoDB, ', error);
  });
  this.db.once('open', function () {
    console.log('Connected to MongoDB');
  });
};

module.exports = MongooseRepository;