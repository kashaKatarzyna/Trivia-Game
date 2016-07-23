app.controller('loginCtrl',['$scope','$location', '$window', 'enter', function($scope, $location, $window, enter){

  $scope.user = {};

  $scope.login = function(){

    if ($scope.loginForm.$valid){

      enter.login($scope.user);
      $location.path('/game');
      $scope.user = "";
      
    } else {
      $scope.error = true;
      $scope.error = "Problems loging in, check username or password";
    }
  };

  $scope.tryAgain = function(){
    enter.tryAgain();
    $window.location.reload();
  };
}]); //contoller closing

