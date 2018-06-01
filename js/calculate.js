


var divResult = document.getElementById("divResult");

var btnNum1 = document.getElementById("btnNum1");
var btnNum2 = document.getElementById("btnNum2");
var btnNum3 = document.getElementById("btnNum3");
var btnNum4 = document.getElementById("btnNum4");
var btnNum5 = document.getElementById("btnNum5");




var numLeft = [];

function btnNum1Press() {
    var btnNum1= 1;
    divResult.innerHTML = btnNum1;
    numLeft.push(btnNum1);
    console.log(numLeft);

    opSayHello();

}


function btnNum2Press() {
    divResult.innerHTML = 2;
}

function btnNum3Press() { divResult.innerHTML = btnNum3.innerHTML; }
function btnNum4Press() { divResult.innerHTML = btnNum4.innerHTML; }
function btnNum5Press() { divResult.innerHTML = btnNum5.innerHTML; }