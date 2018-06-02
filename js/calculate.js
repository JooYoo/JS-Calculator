
var divResult = document.getElementById("divResult");

var btnNum1 = document.getElementById("btnNum1");
var btnNum2 = document.getElementById("btnNum2");
var btnNum3 = document.getElementById("btnNum3");
var btnNum4 = document.getElementById("btnNum4");
var btnNum5 = document.getElementById("btnNum5");


var leftNums = [];

function btnNum1Press() {
    // push 1 into array during each click
    leftNums.push(1);
    // combine the numbers in an Array
    // display it on DOM
    divResult.innerHTML = leftNums.join('');
    console.log(leftNums);
}


function btnNum2Press() {
    leftNums.push(2);
    divResult.innerHTML = leftNums.join('');
    console.log(leftNums);
}

function btnNum3Press() { divResult.innerHTML = btnNum3.innerHTML; }
function btnNum4Press() { divResult.innerHTML = btnNum4.innerHTML; }
function btnNum5Press() { divResult.innerHTML = btnNum5.innerHTML; }