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
    else if(oper == "×"){
        return multiply(a, b);
    }   
    else if(oper == "/"){
        return divide(a, b);
    }
}
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
