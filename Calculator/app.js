const userInput = document.querySelector("#userInput");

function appendToDisplay(input) {
    userInput.value += input;
}

function clearDisplay() {
    userInput.value = "";
}

function calculate() {
    try {
        userInput.value = eval(userInput.value);
    } 
    catch {
        userInput.value = `Error`;
    }
}

function removeElement() {
    userInput.value = userInput.value.slice(0, -1);
    
}