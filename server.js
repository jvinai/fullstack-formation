var express = require('express');
var ideasUtils = require('./server/utils/ideas');
var app = express();

var ideas = [{
  text: 'I should buy a boat',
  priority: 2,
  isDone: true,
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


app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/front', express.static(__dirname + '/front'));

app.get('/api/getAll', function (req, res) {
  var sortedIdeas = ideasUtils.sortByPriority(ideas);
  res.send(sortedIdeas);
});
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000);
console.log('Server start on port 3000');