let buffer = '0';
let prevBuffer = '0';
let prevOper = null;
let total = 0;
const screen = document.querySelector('.output');

function buttonClick(value) {

    console.log('got value from click');

    if(isNaN(value)){
     operHandle(value);   
    } else {
        numberHandle(value);
    }
    render();

}

//handle if the input is a number
function numberHandle(number){
    if (buffer == '0') {
        buffer = number;
    } else {
        buffer += number;
    }
}

//handle if the input is an operation symbol
function operHandle(oper){
    console.log(oper + 'Oper');
    switch(oper){
        case 'C':
            clearBuffer();
            break;
        case '←':
            handleBack();
            break;
        case '+':
            handleMath(oper);
            break;
        case '-':
            handleMath(oper);
            break;
        case '*':  
            handleMath(oper);
            break;
        case '/':
            handleMath(oper);
            break;
        case '=':
            if (prevOper == null){
                return;
            } else {
                flushOperation(parseInt(buffer));
                buffer = "" + total;
                total = 0;
                prevOper = null;
            }
            break;
    }
}

function clearBuffer(){
    buffer = '0';
}

function handleBack(){
    if (buffer.length == 1) {
        buffer = '0';
    } else {
        buffer = buffer.substring(0, buffer.length - 1);
    }
}

function handleMath(value){
    if (buffer == 0) {
        return;
    }

    const intBuffer = parseInt(buffer);

    if(total == 0) {
        total = intBuffer;
    } else {
        flushOperation(intBuffer);
    }

    prevOper = value;
    buffer = '0';
}

function flushOperation(intBuffer) {
    switch(prevOper) {
        case '+':
            total += intBuffer;
            break;
        case '-':
            total -= intBuffer;
            break;
        case '*':
            total *= intBuffer;
            break;
        case '/': 
            total /= intBuffer;
            break;
    }
}

function init() {
    console.log("initialized")
    document.querySelector('.calc-buttons').addEventListener("click", function(event) { buttonClick(event.target.innerText); });
}

function render() {
    console.log('screen value: ' + screen.innerText);
    screen.innerText = buffer;
}

init();