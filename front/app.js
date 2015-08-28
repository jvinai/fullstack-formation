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
    .when('/modify/:id', {
      templateUrl: 'front/template/add.html',
      controller: 'modifyCtrl as c'
    })
    .otherwise({redirectTo: '/'})
});
