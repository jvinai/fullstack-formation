'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IdeaSchema = new Schema({
  id: String,
  text: String,
  priority: Number,
  isDone: Boolean,
  date: Date
});

module.exports = mongoose.model('Idea', IdeaSchema);