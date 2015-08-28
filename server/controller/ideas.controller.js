'use strict';
var uniqid = require('uniqid');
var _ = require('lodash');
var ideasUtils = require('./../utils/ideas');
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
    return ideasUtils.sortByPriority(ideas);
  },
  addIdea: function (idea) {
    idea.id = uniqid();
    ideas.push(idea);
  },
  modifyIdea: function (idea) {
    this.deleteIdea(idea.id);
    ideas.push(idea);
  },
  deleteIdea: function (id) {
    _.remove(ideas, function (item) {
      return id === item.id;
    });
  }
};

module.exports = ideasCtrl;