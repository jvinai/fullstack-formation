'use strict';

angular.module("myIdeaBox").factory('myService', function ($q, $http) {
  var ideas = [];
  return {
    getIdeas: function () {
      if (ideas.length > 0) {
        return $q.resolve(ideas);
      } else {
        return $http({
          url: '/api/getAll',
          method: 'GET'
        }).then(function (xhr) {
          ideas = xhr.data;
          return ideas;
        }, function (error) {
          return $q.reject(error);
        });
      }
    },
    addIdea: function (idea) {
      ideas = [];
      return $http({
        url: '/api/add',
        method: 'POST',
        data: {
          idea: idea
        }
      });
    },
    modifyIdea: function (idea) {
      return $http({
        url: '/api/modify',
        method: 'POST',
        data: {
          idea: idea
        }
      });
    },
    deleteIdea: function(id) {
      _.remove(ideas, function(item) {
        return item.id == id;
      });
      return $http({
        url: '/api/delete/' + id,
        method: 'DELETE',
      });
    },
    extractIdea: function (id) {
      return this.getIdeas().then(function (ideas) {
        return _.find(ideas, function (idea) {
          return idea.id == id;
        }, function (error) {
          return $q.reject(error);
        })
      })
    }
  }

});