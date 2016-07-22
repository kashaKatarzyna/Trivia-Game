angular.module('trivia-app').service('enter', ['$http', function($http){

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

console.log(users[0].username);

  this.login = function(user){
    if(user.username == users[0].username){
      return $http.post('/game');
      
      console.log("HEY THERE");
    } else {
      console.log(" WRONG LOGIN");
    }







console.log("im in factory");


    

  }







}]); //factory closing

