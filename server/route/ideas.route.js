'use strict';

var ideasCtrl = require('./../controller/ideas.controller');

var ideasRoute = {
  initRoute: function (app) {
    app.get('/api/getAll', function (req, res) {
      ideasCtrl.getIdeas().then(function (ideas) {
        res.send(ideas);
      }, function (error) {
        res.status(500).send(error);
      });
    });
    app.post('/api/add', function (req, res) {
      var idea = req.body.idea;
      if (!idea) {
        res.sendStatus(404);
        return;
      }
      ideasCtrl.addIdea(idea).then(function () {
        res.sendStatus(200);
      }, function (error) {
        res.status(500).send(error);
      });
    });
    app.post('/api/modify', function (req, res) {
      var idea = req.body.idea;
      if (!idea) {
        res.sendStatus(404);
        return;
      }
      ideasCtrl.modifyIdea(idea).then(function () {
        res.sendStatus(200);
      }, function (error) {
        res.status(500).send(error);
      });
    });
    app.delete('/api/delete/:id', function (req, res) {
      var id = req.params.id;
      if (!id) {
        res.sendStatus(404);
        return;
      }
      ideasCtrl.deleteIdea(id).then(function () {
        res.sendStatus(200);
      }, function (error) {
        res.status(500).send(error);
      });
    });

  }
};

module.exports = ideasRoute;