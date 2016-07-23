angular.module('trivia-app').service('enter', ['$http', '$window', '$location', function($http, $window, $location){

  var users = [
    {
      username: "username1",
      password: 111
    },
    {
      username: "username2",
      password: 222
    },
    {
      username: "username3",
      password: 333
    },
  ];

  this.login = function(user){

    angular.forEach(users, function(val){

      if (user.username == val.username && 
         user.password == val.password) {

        $location.path('/game');

      } else {

        $window.location.reload();
        alert("Not a user");
      }
    });
  };

}]); //factory closing

