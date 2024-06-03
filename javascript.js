function add(a,b){
    let result = parseFloat(a) + b;
    if (Number.isInteger(result)) {
        return result.toFixed(0); 
    } else {
        return result.toFixed(3); 
    }
}
function subtract(a, b){
    let result = parseFloat(a) - b;
    if (Number.isInteger(result)) {
        return result.toFixed(0); 
    } else {
        return result.toFixed(3); 
    }
}
function multiply(a, b){
    let result = parseFloat(a)*b;
    if (Number.isInteger(result)) {
        return result.toFixed(0); 
    } else {
        return result.toFixed(3); 
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
    const key = event.key; 
    console.log(key);

    if (key === "+") {
        const additionButton = document.querySelector(`.oper[data-key="${key}"]`);
        console.log(additionButton);
        if (additionButton) {
            additionButton.click();
        }
    }
    else if (key === "-") {
        const subtractionButton = document.querySelector(`.oper[data-key="${key}"]`);
        if (subtractionButton) {
            subtractionButton.click(); 
        }
    }
    else if (key === "*") {
        const multiplicationButton = document.querySelector(`.oper[data-key="${key}"]`);
        if (multiplicationButton) {
            multiplicationButton.click(); 
        }
    }
    else if (key === "/") {
        const divisionButton = document.querySelector(`.oper[data-key="${key}"]`);
        if (divisionButton) {
            divisionButton.click(); 
        }
    }
    else if (key === "Enter") {
        const equalsButton = document.querySelector(`.equal[data-key="${key}"]`);
        if (equalsButton) {
            equalsButton.click();
        }
    }
    else if (key === "Backspace") {
        const backspaceButton = document.querySelector(`.clear[data-key="${key}"]`);
        if (backspaceButton) {
            backspaceButton.click();
        }
    }
    else{
    const button = document.querySelector(`.num[data-key="${key}"]`);
    if (button) {

        button.classList.add("anim");
        button.click()
        setTimeout(function(){
            button.classList.remove("anim");
        }, 200);
    }
    
}
});
let display = document.querySelector(".contain");

let buttons = document.querySelectorAll("button");
let runsum = document.querySelector("#RunSum");
let result = document.querySelector("#res");
const arith = document.querySelectorAll('.oper');

arith.forEach(arith => arith.addEventListener("click", function(){
    arith.style.transform = 'scale(.85)';
    arith.style.transition = '0.2s';
    arith.style.boxShadow = '3px 2px 22px 1px rgba(0, 0, 0, 0.24)';
    arith.style.border = "3px solid rgb(157, 117, 15)";
    
}));  
buttons.forEach(button => button.addEventListener("mousedown", function(){
    button.style.transform = 'scale(0.96)';
    button.style.transition = '0.2s';
    button.style.boxShadow = '3px 2px 22px 1px rgba(0, 0, 0, 0.24)';
}))

buttons.forEach(button => button.addEventListener("mouseup", function(){
    button.style.transform = 'scale(1)';
    button.style.transition = '0.2s';
    button.style.boxShadow = '3px 2px 22px 1px rgba(0, 0, 0, 0.24)';
}))
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
        arith.forEach(arith => {arith.style.transform = 'scale(1)';
        arith.style.transition = '0.2s';
        arith.style.boxShadow = '3px 2px 22px 1px rgba(0, 0, 0, 0.24)';
        arith.style.border = "3px solid rgb(0,0,0,0)";})
    }
    else if(button.classList.contains("oper")){
        const match = result.textContent.match(/\d+$/);
    if (match) {
        fNum = parseFloat(runsum.textContent);
        console.log(fNum);
        oper = button.textContent;
        result.textContent += oper;
    }
    }
    else if(button.classList.contains("equal")){
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
