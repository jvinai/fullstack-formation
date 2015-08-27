'use strict';

angular.module("myIdeaBox").factory('myService', function ($http) {
  return {
    getIdeas: function () {
      return $http({
        url: '/api/getAll',
        method: 'GET'
      });
    },
    addIdea: function (idea) {
      return $http({
        url: '/api/add',
        method: 'POST',
        data: {
          idea: idea
        }
      });
    }
  }

});