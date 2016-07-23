var app = angular.module('trivia-app', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  $stateProvider
    // .state('home', {
    //   url: '/',
    //   templateUrl: '/templates/login.html',
    //   controller: 'loginCtrl'
    // })
    .state('login', {
      url: '/login',
      templateUrl: './templates/login.html',
      controller: 'loginCtrl'
    })
    .state('game', {
      url: '/game',
      templateUrl: './templates/game.html',
      controller: 'myCtrl'
    })

    $urlRouterProvider.otherwise('login');
}]);  //config closing




