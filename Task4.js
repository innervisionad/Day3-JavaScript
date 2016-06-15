//Add to an array at a specific index point in the array

//replace button 
var event1 = document.getElementById("button1");
event1.addEventListener('click', replaceValue, false);

//create variables of the inputs
var inputBox = document.getElementById("input1");
var indexBox = document.getElementById("input2");
//declare array
var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//display inital array onto the page
document.getElementById("disp1").innerHTML = array1;

 //insert input into specified position
function replaceValue() {
    array1.splice(indexBox.value -1, 0, inputBox.value);
    document.getElementById("disp1").innerHTML = array1;
    
}
