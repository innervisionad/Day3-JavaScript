//Collect a user input and allocate it to a new array using the push method.Display the array and the length of the array (number of elements) using array.length on the webpage

//Event listener for the button
var event1 = document.getElementById("button1");
event1.addEventListener('click', setArray, false);

function setArray(){
    //set inputs into variables
    var fruit1 = document.getElementById("input1").value;
    
    
// create array to push onto    
var array1 = ["I", "love" , "to", "eat"];
    
// push the input onthe end of the array
array1.push(fruit1);

//display variable on the webpage
document.getElementById("disp1").innerHTML = array1 + ".";
document.getElementById("disp2").innerHTML = "Your array has a length of " + array1.length + ".";
}
