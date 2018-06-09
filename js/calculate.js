// the numbers will display on screen
var tempoNums = [];
var printInput;
var result;
var isResult = false;

var divResult = document.getElementById("divResult");

function btnNum1Press() { toDisplay(1); }
function btnNum2Press() { toDisplay(2); }
function btnNum3Press() { toDisplay(3); }
function btnNum4Press() { toDisplay(4); }
function btnNum5Press() { toDisplay(5); }
function btnNum6Press() { toDisplay(6); }
function btnNum7Press() { toDisplay(7); }
function btnNum8Press() { toDisplay(8); }
function btnNum9Press() { toDisplay(9); }
function btnNum0Press() { toDisplay(0); }

function btnDot() { if(isResult){ toDisplay(0); } toDisplay("."); }
function btnPlus() { isResult = false; toDisplay('+'); }
function btnMinus() { isResult = false; toDisplay('-'); }
function btnTimes() { isResult = false; toDisplay('*'); }
function btnDivide() { isResult = false; toDisplay('/'); }

function btnEqualTo() {
    // calculate to get the result
    result = eval(printInput);
    console.log("[btnEqualto()] result: " + result);

    // reset calculator
    tempoNums = [];


    // display result
    toDisplay(result);
    // switch
    isResult = true;

}

function toDisplay(targetNum) {// a method to display Numbers
    // 
    if (isResult) {
        tempoNums = [];
        isResult = false;
    }

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


function btnReset() {
    console.log('[btnRset()]');
    // clean tempoNumber() container 
    tempoNums = [];
    // clean DOM up
    divResult.innerHTML = 0;
}




