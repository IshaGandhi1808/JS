let randomNum = parseInt(Math.random() * 100 + 1) ;
console.log(randomNum);

const userInput = document.querySelector("#userInput");
const submit = document.querySelector("#subt");
const guesseslot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const msg = document.querySelector(".lowOrHigh");
const startOver = document.querySelector(".resultPara");

const p = document.createElement("p");

let prevGuesses = [];
let numGuesses = 1;

let playGame = true;

if(playGame) {
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validNumber(guess);
    });
}

function validNumber(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    } else if ( guess < 1) {
        alert("Please enter a number greater than 0");
    } else if ( guess > 100) {
        alert("Please enter a number less than 100");
    } else {
        prevGuesses.push(guess);
        if ( numGuesses === 11) {
            displayGuesses(guess);
            displayMessage(`Game Over. You have used up all your guesses.Random Number was ${randomNum}.`);
            endGame();
        } else {
            displayGuesses(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        displayMessage(`Congratulations! You guessed the Right number.`);
        endGame();
    } else if ( guess < randomNum) {
        displayMessage (`Number is too Low.`);
    } else if ( guess > randomNum) {
        displayMessage (`Number is too High.`);
    }
}

function displayGuesses(guess) {
    userInput.value = '';
    guesseslot.innerHTML += `${guess} ,  `;
    numGuesses++;
    remaining.innerHTML = `${ 11 - numGuesses}`;
}

function displayMessage(message) {
    msg.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute("disabled", "");
    p.classList.add("sbt");
    p.innerHTML = `<p id = "newGame"> Start New Game </p>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGame = document.querySelector("#newGame");
    newGame.addEventListener("click", (e) => {
        randomNum = parseInt(Math.random() * 100 + 1) ;
        prevGuesses = [];
        numGuesses = 1;
        guesseslot.innerHTML = '';
        remaining.innerHTML = `${ 11 - numGuesses}`;
        msg.innerHTML = '';
        userInput.removeAttribute("disabled");
        startOver.removeChild(p);

        playGame = true;
    });
}
