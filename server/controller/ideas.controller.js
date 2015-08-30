'use strict';
var uniqid = require('uniqid');
var _ = require('lodash');
var ideasUtils = require('./../utils/ideas');
var IdeaSchema = require('./../schema/idea.schema');
var bluebird = require('bluebird');
var ideas = [{
  id: uniqid(),
  text: 'I should buy a boat',
  priority: 2,
  isDone: true,
  date: new Date()
}, {
  id: uniqid(),
  text: 'I should write a book',
  priority: 3,
  isDone: false,
  date: new Date()
}, {
  id: uniqid(),
  text: 'I should refactor my code',
  priority: 1,
  isDone: false,
  date: new Date()
}];

var ideasCtrl = {
  getIdeas: function () {
    return new bluebird(function (resolve, reject) {
      IdeaSchema.find({}, null, {
        sort: {
          priority: 1
        }
      }, function (error, ideas) {
        if (error) {
          reject(error);
          return;
        }
        resolve(ideas);
      });
    });
  },
  addIdea: function (idea) {
    return new bluebird(function (resolve, reject) {
      idea.id = uniqid();
      var ideaSchema = new IdeaSchema(idea);
      ideaSchema.save(function (error) {
        if (error) {
          reject(error);
          return;
        }
        resolve();
      });
    });
  },
  modifyIdea: function (idea) {
    return new bluebird(function (resolve, reject) {
      IdeaSchema.findOneAndUpdate({id: idea.id}, idea, function (error) {
        if (error) {
          reject(error);
          return;
        }
        resolve();
      });
    });
  },
  deleteIdea: function (id) {
    return new bluebird(function (resolve, reject) {
      IdeaSchema.findOneAndRemove({id: id}, function (error) {
        if (error) {
          reject(error);
          return;
        }
        resolve();
      });
    });
  }
};

module.exports = ideasCtrl;