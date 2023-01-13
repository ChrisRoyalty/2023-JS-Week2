// WEEK_2: PROJECT-1
// A parameterized function for quiz whereby the quiz answer can be passed when the function is called and if the answer equals user answer on prompt, then console the the quiz question and in

// step1: create a parameterized function
function myQuiz(answer) {
  //step2: create a variable to prompt the question and store user answer
  let quizQuestion = prompt(
    "what is the abbreviation for hyper text markup language"
  );

  // change userAnswer toUppercase
  let replyInUppercase = quizQuestion.toUpperCase();

  // if user answer is equal to answer on function call
  if (replyInUppercase === answer) {
    console.log(
      "Question: What is the abbreviation for hyper text markup language?"
    );
    console.log("The answer is " + replyInUppercase + " and your very correct");
  } else if (replyInUppercase != answer) {
    console.log("wrong answer try again later");
  }
}
myQuiz("HTML");
