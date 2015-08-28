'use strict';

angular.module("myIdeaBox").directive('idea', function () {
  return {
    scope: {
      idea: '='
    },
    restrict: 'A',
    templateUrl: 'front/directive/idea.html'
  };
});