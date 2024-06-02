function add(a,b){
    let result = parseFloat(a) + b;
    if (Number.isInteger(result)) {
        return result.toFixed(0); // Return as a whole number
    } else {
        return result.toFixed(3); // Round to 3 decimal places
    }
}
function subtract(a, b){
    let result = parseFloat(a) - b;
    if (Number.isInteger(result)) {
        return result.toFixed(0); // Return as a whole number
    } else {
        return result.toFixed(3); // Round to 3 decimal places
    }
}
function multiply(a, b){
    let result = parseFloat(a)*b;
    if (Number.isInteger(result)) {
        return result.toFixed(0); // Return as a whole number
    } else {
        return result.toFixed(3); // Round to 3 decimal places
    }
}
function divide(a, b){
    let result = parseFloat(a)/b;
    if (Number.isInteger(result)) {
        return result.toFixed(0); // Return as a whole number
    } else {
        return result.toFixed(3); // Round to 3 decimal places
    }
}

let fNum, oper, sNum;

function operate(a, b, oper){
    if(oper == "+"){
        return add(a,b);
    }
    else if(oper == "-"){
        return subtract(a, b);
    }
    else if(oper == "×"){
        return multiply(a, b);
    }   
    else if(oper == "/"){
        return divide(a, b);
    }
}

document.addEventListener("keydown", function(event) {
    const key = event.key; // Get the pressed key
    console.log(key);

    if (key === "+") {
        // Find the addition button based on the data-key attribute
        const additionButton = document.querySelector(`.oper[data-key="${key}"]`);
        console.log(additionButton);
        // If the addition button is found, simulate a click event on it
        if (additionButton) {
            additionButton.click(); // Simulate a click on the addition button
        }
    }
    else if (key === "-") {
        // Find the subtraction button based on the data-key attribute
        const subtractionButton = document.querySelector(`.oper[data-key="${key}"]`);
        // If the subtraction button is found, simulate a click event on it
        if (subtractionButton) {
            subtractionButton.click(); // Simulate a click on the subtraction button
        }
    }
    else if (key === "*") {
        // Find the multiplication button based on the data-key attribute
        const multiplicationButton = document.querySelector(`.oper[data-key="${key}"]`);
        // If the multiplication button is found, simulate a click event on it
        if (multiplicationButton) {
            multiplicationButton.click(); // Simulate a click on the multiplication button
        }
    }
    else if (key === "/") {
        // Find the division button based on the data-key attribute
        const divisionButton = document.querySelector(`.oper[data-key="${key}"]`);
        // If the division button is found, simulate a click event on it
        if (divisionButton) {
            divisionButton.click(); // Simulate a click on the division button
        }
    }
    else if (key === "Enter") {
        // Find the equals button based on the data-key attribute
        const equalsButton = document.querySelector(`.equal[data-key="${key}"]`);
        // If the equals button is found, simulate a click event on it
        if (equalsButton) {
            equalsButton.click(); // Simulate a click on the equals button
        }
    }
    else if (key === "Backspace") {
        // Find the backspace button based on the data-key attribute
        const backspaceButton = document.querySelector(`.clear[data-key="${key}"]`);
        // If the backspace button is found, simulate a click event on it
        if (backspaceButton) {
            backspaceButton.click(); // Simulate a click on the backspace button
        }
    }
    else{
    const button = document.querySelector(`.num[data-key="${key}"]`);
    if (button) {
        button.click(); // Simulate a click on the button
    }
}
});

let display = document.querySelector(".contain");

let buttons = document.querySelectorAll("button");
let runsum = document.querySelector("#RunSum");
let result = document.querySelector("#res");
// buttons.forEach(button => button.addEventListener("mousedown", function(){
//     button.style.transform = 'scale(0.9)';
//     button.style.transition = '0.2s';
//     button.style.boxShadow = '3px 2px 22px 1px rgba(0, 0, 0, 0.24)';
// }))
// button.forEach(button => button.addEventListener("mouseup", function(){
//     button.style.transform = 'scale(1.3)';
//     button.style.transition = '0.2s';
//     button.style.boxShadow = '3px 2px 22px 1px rgba(0, 0, 0, 0.24)';
// }))
buttons.forEach(button => button.addEventListener("click", function(){
    if(button.classList.contains("num")){
        if(parseFloat(button.textContent) == 0 && result.textContent ==""){
            return;
        }
        result.textContent+= button.textContent;
        if(fNum!= undefined){
            const match = result.textContent.match(/\d+$/);
            if (match) {
                sNum = parseFloat(match[0]);
                runsum.textContent = operate(fNum, sNum, oper);
            }
        }
        else{
            runsum.textContent = result.textContent;
        }
    }
    else if(button.classList.contains("oper")){
        // if(fNum!= undefined && sNum!=undefined){
        //     result.textContent = operate(fNum, sNum, oper);
        // }const match = display.textContent.match(/\d+$/);
        const match = result.textContent.match(/\d+$/);
    if (match) {
        fNum = parseFloat(runsum.textContent);
        console.log(fNum);
        oper = button.textContent;
        result.textContent += oper;
    }
    }
    else if(button.classList.contains("equal")){
        // sNum = parseFloat(display.textContent);
        result.textContent = operate(fNum, sNum, oper);
    }
    else if(button.classList.contains("clear")){
        fNum = undefined;
        sNum = undefined;
        oper = undefined;
        result.textContent = "";
        runsum.textContent = "";
    }
}));
