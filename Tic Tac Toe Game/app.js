let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#newGame-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // Player X, Player O

let count = 0; // Count of moves made

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//Reset game
const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        box.classList.remove("X", "O");
        console.log("Box was Clicked");
        if (turnO) {
            box.textContent = "O";
            box.classList.add("O");
            turnO = false;
            count++;
            console.log(count);
            
            if (checkForWin()) {

            } else if (count === 9) {
                showDraw();
            }

        } else {
            box.textContent = "X";
            box.classList.add("X");
            turnO = true;
            count++;
            console.log(count);
            
            if (checkForWin()) {

            } else if (count === 9) {
                showDraw();
            }
        }
        box.disabled = true;
    });
});

// Check for win
const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
}

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.textContent = "";
    });
}

const showWinner = (winner) => {
    msg.innerHTML = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkForWin = () => {
    let WinnerFound = false;

    winPatterns.forEach((pattern) => {
        let a = boxes[pattern[0]].textContent;
        let b = boxes[pattern[1]].textContent;
        let c = boxes[pattern[2]].textContent;
        if (a === b && b === c && a !== "") {
            console.log("Player " + a + " wins!");
            showWinner(a);
            WinnerFound = true;
        }
    });

    return WinnerFound;
};

const showDraw = () => {
    msg.innerHTML = "It's a draw!";
    msgContainer.classList.remove("hide");
    disableBoxes();
};

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);

//Leetcode Q 1275 , Try to solve this Problem yourself, It's a Home Work.f