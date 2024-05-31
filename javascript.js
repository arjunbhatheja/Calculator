function add(a,b){
    return a+b;
}
function subtract(a, b){
    return a-b;
}
function multiply(a, b){
    return a*b;
}
function divide(a, b){
    return parseFloat(a)/b;
}

let fNum, oper, sNum;

function operate(a, b, oper){
    if(oper == "+"){
        return add(a,b);
    }
    else if(oper == "-"){
        return subtract(a, b);
    }
    else if(oper == "╳"){
        return multiply(a, b);
    }   
    else if(oper == "/"){
        return divide(a, b);
    }
}
let display = document.querySelector(".contain");

let buttons = document.querySelectorAll("button");
let result = document.querySelector(".result");
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
        result.textContent += button.textContent;
    }
    else if(button.classList.contains("oper")){
        fNum = parseFloat(display.textContent);
        oper = button.textContent;
        result.textContent = "";
    }
    else if(button.classList.contains("equal")){
        sNum = parseFloat(display.textContent);
        result.textContent = operate(fNum, sNum, oper);
    }
    else if(button.classList.contains("clear")){
        result.textContent = "";
    }
}));
