app.controller('loginCtrl',['$scope', '$state', function($scope, $state){

  $scope.username = "hey";
  console.log($scope.username);

  $scope.login = function(){
    if($scope.loginForm.$valid){
      console.log("doing the form");
    }

  }


}]); //contoller closing

// in controller have to inject service