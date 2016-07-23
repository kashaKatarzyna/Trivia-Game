//arr of obj of our qs and answ.
//inj into controller so can be used across our app
app.factory('quiz', function(){
  var questions= [
      {
        question: "What is the most common training command for dogs?",
        answers: ["Stay", "Sit", "Roll", "Dance"],
        correct: "Sit"
      },
      {
        question: "What sound do cats make?",
        answers: ["Woof", "Mooo", "Kukuryku", "Meow"],
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
