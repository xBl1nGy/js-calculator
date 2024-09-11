// Calculator logic

const display = document.getElementById("display");
let val1 = 0;
let val2 = 0;

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    display.value = eval(display.value);
}