var app = angular.module('trivia-app', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: '/tempaltes/login.html',
      controller: 'loginCtrl'
    })
    .state('game', {
      url: '/game',
      templateUrl: '/templates/game.html',
      controller: 'myCtrl'
    })
}]);  //config closing




