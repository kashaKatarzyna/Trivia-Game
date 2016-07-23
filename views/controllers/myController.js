//cntrl holds all the logic
app.controller('myCtrl', ['$scope', 'quiz', '$timeout', '$location', '$window', function($scope, quiz, $timeout, $location, $window) {
  $scope.qs = quiz;
  $scope.idx = 0;
  $scope.counter = 60;
  $scope.helpFromAudience = false;
  $scope.user = {
    points: 0,
    strike: 3
  };


  // invoked when correct answer is selected
  // add or remove points
  $scope.correctAnswer = function (answer,correct){
    if(answer === correct){
      $scope.user.points += 10;
    } else {
      $scope.user.strike -= 1;
    }
    $scope.change();
  };


//counter fnc. after 60 sec removes a strike
  var onTimeout = function(){
    $scope.counter--;
    timeout = $timeout(onTimeout, 1000);

    if ($scope.counter < 0) {
      if ($scope.user.strike !== 0) {
        $scope.user.strike -= 1  

      } else {
        $timeout.cancel(timeout);
      }
      $scope.change();
    }
  };
  //timeout available in global scope, below the fnc bc otherwise the counter wont count
  var timeout = $timeout(onTimeout, 1000);


  // change questions
  $scope.change = function() {
    if ($scope.user.strike === 0) {
      $scope.stop = true;
      $scope.winnersEnd = true;
      $scope.playagain = true;
      
    } else {
      $scope.idx++;

      if ($scope.idx === $scope.qs.length){
       $timeout.cancel(timeout)
       $scope.winner = true;
       $scope.winnersEnd = true;
       $scope.playagain = true;

      } else {
        $scope.winner = false;
      }
    }
    $scope.counter = 60;
  };


  // remove help button
  //remove correct answer
  // assigning new values correct and random
  $scope.filterArr = function(obj) {
    $scope.helpFromAudience = true;
    obj.answers.splice(obj.answers.indexOf(obj.correct), 1);
    obj.answers = [obj.correct, obj.answers[Math.floor(Math.random() * obj.answers.length)]];
  };


//enables user to restart the game
  $scope.playAgain = function(){
    $window.location.reload();
    $location.path('/game');
  };
  
}]);  //myCtr closing
