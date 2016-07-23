angular.module('trivia-app').service('enter', ['$http', '$window', function($http, $window){

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
    for(var i = 0; i < users.length; i++){

      if(user.username !== users[i].username){
       $window.location.reload();

        // tryAgain();
        console.log("wrong user");

      } else {

        return false;
        console.log(" WRONG LOGIN");
      };
    };
  };

  // this.tryAgain = function(){
  //   console.log("what to say");

  // }

}]); //factory closing

// finish login, if username entered  is not in the array then prevent from going to game