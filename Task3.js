//Add and Remove first and last elements  on and off an //array using shift, unshift, push and pop methods

//shift button 
var event1 = document.getElementById("shiftNum");
event1.addEventListener('click', shiftNum, false);
//unshift button
var event1 = document.getElementById("unShiftNum");
event1.addEventListener('click', unShiftNum, false);
//push button
var event1 = document.getElementById("pushNum");
event1.addEventListener('click', pushNum, false);
//pop button
var event1 = document.getElementById("popNum");
event1.addEventListener('click', popNum, false);
//create variable for the input
var textBox = document.getElementById("input1");
//declare array
var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//display inital array onto the page
document.getElementById("disp1").innerHTML = array1;

//shift value and update on screen
function shiftNum() {
    array1.shift();
    document.getElementById("disp1").innerHTML= array1;
}
//unshift value and update on screen
function unShiftNum() {
    array1.unshift(textBox.value);
    document.getElementById("disp1").innerHTML = array1;
}
//push value and update on screen
function pushNum () {
    array1.push(textBox.value);
    document.getElementById("disp1").innerHTML = array1;
}
//pop value and update on screen
function popNum() {
    array1.pop();
    document.getElementById("disp1").innerHTML = array1;
}