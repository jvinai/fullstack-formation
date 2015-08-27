angular.module("myIdeaBox", ['ui.bootstrap', 'ngRoute']).config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'front/template/ideas.html',
      controller: 'myCtrl as c'
    })
    .when('/add', {
      templateUrl: 'front/template/add.html',
      controller: 'addCtrl as c'
    })
    .otherwise({templateUrl: 'default.html'})
});
