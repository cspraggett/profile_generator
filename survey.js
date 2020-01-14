const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  "What's your name?",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc)",
  "What's you favourite thing to eat for that meal?",
  "Which sport is you absolute favourite?",
  "What is you superpower? In a few words, tell us what you are amazing at!"
];

let answers = [];

const askQuestion = curr => {
  rl.question(`${questions[curr]} `, answer => {
    answers.push(answer);
    if (curr < questions.length - 1) {
      askQuestion(curr + 1);
    } else {
      let blurb = `${answers[0]} loves listening to ${answers[2]} while ${answers[1]}, devouring ${answers[4]} for ${answers[3]}, prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]} `;
      console.log(blurb);
      rl.close();
    }
    //console.log(answers);
    // rl.close();
  });
  //rl.question("What do you think of Node.js? ", answer => {
  // console.log(`Thank you for your valuable feedback: ${answer}`);

  // rl.close();
};
for (let i = 0; i < questions.length; i++) {
  askQuestion(i);
}

//console.log(answers);
