
var divResult = document.getElementById("divResult");


function btnNum1Press() { toDisplay(1); }
function btnNum2Press() { toDisplay(2); }
function btnNum3Press() { toDisplay(3); }
function btnNum4Press() { toDisplay(4); }
function btnNum5Press() { toDisplay(5); }

function btnPlus() { toDisplay('+'); }

// the numbers will display on screen
var tempoNums = [];

var printInput;


function toDisplay(targetNum) {// a method to display Numbers
    // push 1 into array during each click
    tempoNums.push(targetNum);
    // combine the numbers in an Array
    printInput = tempoNums.join('');
    // display it on DOM
    divResult.innerHTML = printInput;
    // info
    console.log("[toDisplay()] tempoNums: " + tempoNums);
    console.log("[toDisplay()] printInput: " + printInput);
}

function btnEqualTo(){
    // calculate 
    var result = eval(printInput);
    console.log("[btnEqualto()] result: " + result);
    // disply =
    toDisplay('=');
    // display result
    toDisplay(result);
    // reset calculator
    tempoNums = [];
}



