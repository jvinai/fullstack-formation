'use strict';

angular.module("myIdeaBox").controller('addCtrl', function ($scope, myService) {
  $scope.idea = {priority: "1"};
  $scope.message = '';

  this.submitForm = function () {
    var idea = $scope.idea;
    idea.isDone = false;
    idea.date = new Date();
    idea.priority = parseInt(idea.priority);
    myService.addIdea($scope.idea).then(function () {
      $scope.message = 'Idea added';
    }, function (error) {
      $scope.message = 'An error during add idea to server';
    });
  };

});