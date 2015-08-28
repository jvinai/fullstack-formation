'use strict';

angular.module("myIdeaBox").controller('myCtrl', function ($rootScope, $scope, myService) {
  $scope.ideas = [];

  myService.getIdeas().then(function (xhr) {
    $scope.ideas = xhr;
  }, function (error) {
    console.log(error);
  });

  $scope.$on('delete-idea', function(event, id) {
    myService.deleteIdea(id).then(function() {
      _.remove($scope.ideas, function(item) {
        return item.id == id;
      });
    }, function(error){
      console.log(error);
    });
  });

});