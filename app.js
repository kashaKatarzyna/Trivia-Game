var app = angular.module('trivia-app', []);


//factory will hold an array of object where each object is our question and array of possible answers.
//factory must be passed in to our controller which will allow it to use whatver is inside our factory
app.factory('quiz', function(){
	var questions= [
      {
        question: "What is the most common training command for dogs?",
        answers: ["Stay", "Sit", "Roll", "Dance"],
        correct: "Sit"
      },
      {
        question: "What sound do cats make?",
        answers: ["Woof", "Meeeh", "Kukuryku", "Meow"],
        correct: "Meow"
      },
      {
        question: "How many legs do birds have?",
        answers: [5,1,2,3],
        correct: 2
      },
      {
        question: "How many teeth an adult dog has?",
        answers: [12, 24, 42, 38],
        correct: 42
      },
      {
        question: "How many whiskers a cat has on average?",
        answers: [24, 42, 12, 14],
        correct: 24
      },
      {
        question: "A zebra is what color?",
        answers: ["Black", "White", "Black with white stripes", "White with black stripes"],
        correct: "White with black stripes"
      },
      {
        question: "What is a dog`s most developed sense?",
        answers: ["Taste", "Sight", "Touch", "Smell"],
        correct: "Smell"
      },
      {
        question: "Dogs on average live between how many years?",
        answers: ["0 - 6 years", "6 - 10 years", "10 - 14 years", "14 - 25 years"],
        correct: "10 - 14 years"
      },
      {
        question: "While resting, a birds heart can beat how many times per minute?",
        answers: [100, 200 , 300, 400],
        correct: 400
      },
      {
        question: "A goldfish can live up to how many years?",
        answers: [1, 5, 10, 40],
        correct: 40
      }
    ];
		return questions;
});

//controller will hold all the logic of our app
//assigning the questions array in quizz factory to qs scope
//index number in array is scope idx and start at 0
//user has points and how many times can answer wrong
//assigning timer to 0
app.controller('myCtrl', ['$scope', 'quiz', '$timeout', function($scope, quiz, $timeout) {
	$scope.qs = quiz;
	$scope.idx = 0;
	$scope.user = {
		points: 0,
		strike: 3
	};
	$scope.counter = 60;
	$scope.helpFromAudience = false;

  var onTimeout = function(){
    $scope.counter--;
    timeout = $timeout(onTimeout, 1000);
		if ($scope.counter < 0) {
			$scope.user.strike !== 0 ? $scope.user.strike -= 1 : $timeout.cancel(timeout);
			$scope.change();
		}
  }

	var timeout = $timeout(onTimeout, 1000);

	//this fnc is invoked when user answers the correct answer.
	//when user reaches 0 points its end of the game so...
	//..in index.html will change ng show from false to true and will display end of game
	// =  ($scope.idx + 1) % $scope.qs.length;
	$scope.change = function() {
		if ($scope.user.strike === 0) {
			$scope.stop = true;
		} else {
			$scope.idx++;
			$scope.idx === $scope.qs.length ? $scope.winner = true : $scope.winner = false;
		}
		$scope.counter = 60;
	};

	//this fnc is invoked when user click on the correct answer from html
	//if slected ansewer is equal to correct answer in the array then...
	//... assign 10 points to the user
	//if answer is not correct substract the number of strikes
	//after condition is met then invoke this function
	$scope.correctAnswer = function (answer,correct){
		if(answer === correct){
			$scope.user.points += 10;
		} else {
			$scope.user.strike -= 1;
		}
		$scope.change();
	};

	$scope.filterArr = function(obj) {
		// remove help button
		$scope.helpFromAudience = true;
		//remove coorrect answer
		obj.answers.splice(obj.answers.indexOf(obj.correct), 1);
		// assigning new values correct and random
		obj.answers = [obj.correct, obj.answers[Math.floor(Math.random() * obj.answers.length)]];
	};
}]);
