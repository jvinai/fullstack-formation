'use strict';

var ideasCtrl = require('./../controller/ideas.controller');

var ideasRoute = {
  initRoute: function(app) {
    app.get('/api/getAll', function (req, res) {
      var sortedIdeas = ideasCtrl.getIdeas();
      res.send(sortedIdeas);
    });
    app.post('/api/add', function (req, res) {
      var idea = req.body.idea;
      if (!idea) {
        res.sendStatus(404);
        return;
      }
      ideasCtrl.addIdea(idea);
      res.sendStatus(200);
    });
  }
};

module.exports = ideasRoute;