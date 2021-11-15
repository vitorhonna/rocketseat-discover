const questions = [
  "O que aprendi hoje?",
  "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
  "O que me deixou feliz hoje?",
  "Quantas pessoas ajudei hoje?",
];

// questions.forEach((question) => process.stdout.write(question + "\n"));

const ask = (index = 0) => {
  process.stdout.write(questions[index] + " > ");
};

// const randomQuestionIndex = Math.floor(Math.random() * 4);
// ask(randomQuestionIndex);

ask();

const answers = [];

process.stdin.on("data", (data) => {
  let answersLength = answers.push(data.toString().trim());
  if (answersLength < questions.length) {
    ask(answersLength);
  } else {
    console.log("");
    console.log(answers);
    process.exit();
  }
});

process.on("exit", () => {
  console.log("Tchau");
});
