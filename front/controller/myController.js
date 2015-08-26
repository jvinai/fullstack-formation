'use strict';

angular.module("myIdeaBox").controller('myCtrl', function ($scope) {
  $scope.ideas = [{
    text: 'I should buy a boat',
    priority: 2,
    isDone: false,
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

});