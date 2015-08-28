'use strict';

angular.module("myIdeaBox").directive('idea', function () {
  return {
    scope: {
      idea: '='
    },
    restrict: 'A',
    controller:function($scope) {
      $scope.deleteIdea = function() {
        $scope.$emit('delete-idea', $scope.idea.id);
      }
    },
    templateUrl: 'front/directive/idea.html'
  };
});