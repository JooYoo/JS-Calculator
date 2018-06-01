
var divResult= document.getElementById("divResult");

var btnNum1 = document.getElementById("btnNum1");
var btnNum2 = document.getElementById("btnNum2");
var btnNum3 = document.getElementById("btnNum3");
var btnNum4 = document.getElementById("btnNum4");

console.log(divResult.innerHTML);

function btnNum1Press(){divResult.innerHTML = btnNum1.innerHTML;}
function btnNum2Press(){divResult.innerHTML = btnNum2.innerHTML;}
function btnNum3Press(){divResult.innerHTML = btnNum3.innerHTML;}
function btnNum4Press(){divResult.innerHTML = btnNum4.innerHTML;}