'use strict';

var IdeasUtils = {
  sortByPriority: function(ideas) {
    return ideas.sort(function (a, b) {
      return a.priority > b.priority;
    });
  }
};

module.exports = IdeasUtils;