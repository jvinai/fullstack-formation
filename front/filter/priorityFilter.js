'use strict';

angular.module("myIdeaBox").filter('priority', function () {
  var priority = ['', 'Importante', 'Conseillée', 'Pas importante'];
  return function (input) {
    return priority[input];
  }

});