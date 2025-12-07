function checkAnswer() {
  let correctAnswer = "4";
  let userAnswer = document.querySelector("input[name='quiz']:checked").value;
  let feedback = document.getElementById("feedback");

  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
    feedback.style.color = "green";
    console.log(yes);
  } else {
    feedback.textContent = "that's Incorrect. Try again!";
    feedback.style.color = "red";
  }
}
let submitButton = document.getElementById("submit-answer");

submitButton.addEventListener("click", checkAnswer);
