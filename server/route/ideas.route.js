'use strict';

var ideasCtrl = require('./../controller/ideas.controller');

var ideasRoute = {
  initRoute: function (app) {
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
    app.post('/api/modify', function (req, res) {
      var idea = req.body.idea;
      if (!idea) {
        res.sendStatus(404);
        return;
      }
      ideasCtrl.modifyIdea(idea);
      res.sendStatus(200);
    });
    app.delete('/api/delete/:id', function (req, res) {
      var id = req.params.id;
      if (!id) {
        res.sendStatus(404);
        return;
      }
      ideasCtrl.deleteIdea(id);
      res.sendStatus(200);
    });

  }
};

module.exports = ideasRoute;