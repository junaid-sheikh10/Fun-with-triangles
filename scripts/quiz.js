const quizform = document.querySelector(".quiz-form");
const submit = document.querySelector("#btn");
const outputEl = document.querySelector(".outputdiv");

const correctAnswers = [
    "90°",
    "one right angle",
    "12, 16, 20",
    "Equilateral triangle",
    "100°",
    "30°",
    "a + b + c",
    "no",
    "45°",
  ];




function calculateScore() {
    const formResults = new FormData(quizform);
    let score = 0,
      index = 0;
    for (let value of formResults.values()) {
      if (value === correctAnswers[index]) {
        score = score + 1;
      }
      index = index + 1;
    }
    // console.log("The score is "+score);
    outputEl.innerText = "The score is " + score;
  }

  submit.addEventListener("click", calculateScore);
  
