'use strict';

angular.module("myIdeaBox").factory('myService', function ($http) {
  return {
    getIdeas: function () {
      return $http({
        url: '/api/getAll',
        method: 'GET'
      });
    }
  }

});