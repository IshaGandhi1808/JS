let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const choices = ["stone", "paper", "scissors"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

const drawGame = () => {
    console.log("Game was Draw!");
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor =  "rgb(11, 11, 70)";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        console.log("You lose!");
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "rgb(200, 45, 45)";
    }
}

const playGame = (userChoice) => {
    console.log ("User choose ",userChoice);
    //Generate Computer choice -> moduler way

    const compChoice = genCompChoice();
    console.log("Computer choose ", compChoice);

    if (userChoice === compChoice) {
        //Draw Game
        drawGame();

    }else {
        let userWin = true;

        if (userChoice === "stone") {
            userWin = compChoice === "paper" ? false : true;
        }else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }else {
            userWin = compChoice === "stone" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.id;
        //console.log("Choice was clicked.", userChoice);
        playGame(userChoice);
    });
});