var express = require('express');
var ideasRoute = require('./server/route/ideas.route');
var bodyParser = require('body-parser');
var Mongoose = require('./server/repository/mongoose.repository');
var cluster = require('cluster');


if (cluster.isMaster) {
  var cpuCount = require('os').cpus().length;

  // Create a worker for each CPU
  for (var i = 0; i < cpuCount; i += 1) {
    cluster.fork();
  }

} else {
  var app = express();

  app.use('/bower_components', express.static(__dirname + '/bower_components'));
  app.use('/front', express.static(__dirname + '/front'));
// parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
  app.use(bodyParser.json());

  app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
  });

  ideasRoute.initRoute(app);
  var mongoose = new Mongoose({url: 'mongodb://localhost/ideas'});
  mongoose.init();
  app.listen(3000);
  console.log('Server start on port 3000');
}

