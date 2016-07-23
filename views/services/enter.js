angular.module('trivia-app').service('enter', ['$http', '$window', '$location', function($http, $window, $location){

  var users = [
    {
      username: "username1",
      password: 111
    },
    {
      username: "username2",
      password: 222222
    },
    {
      username: "username3",
      password: 333333
    },
  ];

  this.login = function(user){

    for (var i = 0; i < users.length; i++){

      if (user.username !== users[i].username){
        console.log("wrong username");
        $window.location.reload();
        
      } else {

        $location.path('/game');
      };
    };
  };

}]); //factory closing

