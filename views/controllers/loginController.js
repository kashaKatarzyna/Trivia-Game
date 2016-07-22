app.controller('loginCtrl',['$scope','enter', function($scope, enter){

  $scope.user = {};
// console.log($scope.user);

  $scope.login = function(){
    
    if($scope.loginForm.$valid){
      enter.login($scope.user);

  // console.log($scope.user);
  console.log("doing the form");

      $scope.user = "";
      
    } else {
      console.log("error")
    }

  }


}]); //contoller closing

