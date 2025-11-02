console.log("Day-7")

//the rock paper or sessor game

function rockPaperScissorGame (){
      console.log("Getting started with the rock paper scissor game");

      const userChoicePrompt = prompt("Enter Rock, Paper or Scissor");
      let userChoice = userChoicePrompt.toLowerCase();

      let computerChoice;
      const randomNumber = Math.floor(Math.random() * 3) + 1;


      if (randomNumber === 1){
         computerChoice = "rock";

      }else if (randomNumber === 2){
         computerChoice = "paper";

      }else {computerChoice = "Scissor";
      }
      console.log("user select", userChoice)
      console.log("computer select", computerChoice)

      if (

          (userChoice === "rock" && computerChoice === "scissor") ||
          (userChoice === "paper" && computerChoice === "rock")   ||
          (userChoice === "scissor" && computerChoice === "paper")


      )
       {
            console.log("You the user win, clap for yourself");

       }else if (userChoice === computerChoice)
            console.log("The game is tiled");

      else if (
             (userChoice === "rock" && computerChoice === "paper")    ||
             (userChoice === "paper" && computerChoice === "scissor") ||
             (userChoice === "scissor" && computerChoice === "rock")
      )
      {
            console.log("OH NO! Computer Wins");

      }else (
         console.log("Please check the input, we did't understand")
      )
       
      const playAgainPrompt = prompt("Do you want to play again? yes or no?")

      const playAgain = playAgainPrompt ? playAgainPrompt.toLocaleLowerCase() :
      "no";

      if (playAgain === "yes"){
            rockPaperScissorGame();
      }
}
// Start the game

rockPaperScissorGame(); 