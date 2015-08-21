var express = require('express');
var app = express();

var ideas = [{
  text: 'I should buy a boat',
  priority: 1,
  isDone: false,
  date: new Date()
}, {
  text: 'I should write a book',
  priority: 2,
  isDone: false,
  date: new Date()
}];

app.get('/api/getAll', function (req, res) {
  res.send(ideas);
});

app.listen(3000);