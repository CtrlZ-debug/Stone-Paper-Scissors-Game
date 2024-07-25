let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");


const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
     return options[randIdx];
    // rock ,papaer scissors
};


const drawGame =() => {
     msg.innerText = "Oops! Game is Draw";
    msg.style.backgroundColor = "#081b31";
    msg.style.color = "white"
   };


    const showWinner = (userWin, userChoice, computerChoice) => {
        if(userWin) {
            userScore++;
            userScorePara.innerText = userScore;
            console.log("Bravo, U Win the Game!!");
            msg.innerText = `Bravo, U Win the Game!!`;
            msg.style.backgroundColor = "#ffff00";
            msg.style.color = "black"
        } else { 
            computerScore++;
            computerScorePara.innerText = computerScore;
            msg.innerText = `Ohhh!! U Loose the Game`;
            msg.style.backgroundColor = "red";
            msg.style.color = "black"
        }
    };


const playGame = (userChoice) => {
console.log("user choice=" , userChoice);
const computerChoice = genComputerChoice();
console.log("computer choice =" , computerChoice);
// here computer or your choice is generated

if(userChoice === computerChoice) {
    // jb dono case equal hongi tho Condition of draw...
    drawGame();
} else {
   let userWin = true;
    if(userChoice === "rock"){

       userWin =  computerChoice === "paper" ? false : true;
      } else if (userChoice === "paper"){
        
           userWin =  computerChoice === "secissors" ? false : true;

        } else {
               userWin =  computerChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, computerChoice);
}
};



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
    console.log("choice was clicked");
    playGame(userChoice);
    });
});