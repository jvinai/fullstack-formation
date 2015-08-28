'use strict';

angular.module("myIdeaBox").controller('modifyCtrl', function ($scope, $routeParams, myService) {
  $scope.idea = {};
  $scope.message = '';
  var isValid = true;
  var id = $routeParams.id;

  myService.extractIdea(id).then(function (idea) {
    idea.priority = "" + idea.priority;
    $scope.idea = idea;
  }, function (error) {
    isValid = false;
    console.log(error);
  });

  this.submitForm = function () {
    if (!isValid) {
      $scope.message = 'Cannot modify this idea';
      return;
    }
    var idea = $scope.idea;
    idea.priority = parseInt(idea.priority);
    myService.modifyIdea($scope.idea).then(function () {
      $scope.message = 'Idea modified';
    }, function (error) {
      $scope.message = 'An error during modification of the idea';
    });
  };

});