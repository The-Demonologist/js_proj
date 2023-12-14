let curr_output = 0;

function buttonClick(value) {
    console.log('got value from click');
    if(isNaN(value)){
     operHandle(value);   
    } else {
        numberHandle(value);
    }
}

function numberHandle(number){
    console.log(number + 'Number');
}

function operHandle(oper){
    console.log(oper + 'Oper');
}

function init() {
    console.log("initialized")
    document.getElementsByClassName('.num-button').addEventListener("click", function(event) { buttonClick(event.target.innerText); });
    
    document.getElementsByClassName('.op-button').addEventListener("click", function(event) { buttonClick(event.target.innerText); });
}

init();