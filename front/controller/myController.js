'use strict';

angular.module("myIdeaBox").controller('myCtrl', function ($rootScope, $scope, myService) {
  $scope.ideas = [];

  myService.getIdeas().then(function (xhr) {
    $scope.ideas = xhr;
  }, function (error) {
    console.log(error);
  });

});