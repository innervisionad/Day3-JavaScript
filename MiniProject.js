//Mini Project: Random winner generator       
//http://lite-support.co.uk/dev/published/randomwinnergenerator/rwg.html
//Users can input elemnts into an array and then select a random winner from //that array and display it on the screen

//button for submitting names
var event1 = document.getElementById("button1");
event1.addEventListener('click',addName, false);

//button for choosing winner
var event2 = document.getElementById("button2");
event2.addEventListener('click', chooseWin, false);

var nameEnt = document.getElementById("nameEntry");

var nameArray = [];

function addName() {
    if(nameEnt.value != ""){
    nameArray.push(nameEnt.value);
    document.getElementById("entries").innerHTML = nameArray.join("<br>");
    }
}
    
function chooseWin() {
    var win1 = nameArray[Math.floor(Math.random() * nameArray.length)];
    document.getElementById("winner").innerHTML = win1;
    
}