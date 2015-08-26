'use strict';

angular.module("myIdeaBox").controller('myCtrl', function ($scope, myService) {
  $scope.ideas = [];

  myService.getIdeas().then(function (xhr) {
    $scope.ideas = xhr.data;
  }, function (error) {
    console.log(error);
  });

});