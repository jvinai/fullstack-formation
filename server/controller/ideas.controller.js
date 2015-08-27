'use strict';

var ideasUtils = require('./../utils/ideas');
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

var ideasCtrl = {
  getIdeas: function () {
    return ideasUtils.sortByPriority(ideas);
  },
  addIdea: function (idea) {
    ideas.push(idea);
  }
};

module.exports = ideasCtrl;