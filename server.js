var express = require('express');
var ideasUtils = require('./utils/ideas');
var app = express();

var ideas = [{
  text: 'I should buy a boat',
  priority: 2,
  isDone: false,
  date: new Date()
}, {
  text: 'I should write a book',
  priority: 3,
  isDone: false,
  date: new Date()
}, {
  text: 'I should refactor my code',
  priority: 1,
  isDone: false,
  date: new Date()
}];

app.get('/api/getAll', function (req, res) {
  var sortedIdeas = ideasUtils.sortByPriority(ideas);
  res.send(sortedIdeas);
});

app.listen(3000);