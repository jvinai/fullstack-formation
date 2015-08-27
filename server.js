var express = require('express');
var ideasRoute = require('./server/route/ideas.route');
var bodyParser = require('body-parser');
var app = express();

app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/front', express.static(__dirname + '/front'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

ideasRoute.initRoute(app);

app.listen(3000);
console.log('Server start on port 3000');