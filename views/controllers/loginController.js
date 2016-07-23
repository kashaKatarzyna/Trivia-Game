app.controller('loginCtrl',['$scope','$location', '$window', 'enter', function($scope, $location, $window, enter){

  $scope.user = {};


  $scope.login = function(){

    if ($scope.loginForm.$valid){
      
      enter.login($scope.user);
      $scope.dataLoading = true;
      $scope.user = "";
      
    } else {

      $scope.error = true;
      $scope.error = "Problems loging in, check username or password";
    }
  };

  $scope.tryAgain = function(){
    $window.location.reload();
    $scope.dataLoading = true;
  };
}]); //contoller closing

