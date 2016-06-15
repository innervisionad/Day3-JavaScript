//Collect 3 user inputs and allocate them to three members of a new array. Display the array on the webpage.

//Event listener for the button
var event1 = document.getElementById("button1");
event1.addEventListener('click', setArray, false);

function setArray(){
    //set inputs into variables
    var set1 = parseInt(document.getElementById("input1").value);
    var set2 = parseInt(document.getElementById("input2").value);
    var set3 = parseInt(document.getElementById("input3").value);
    
// put variables into the array    
var array1 = [set1, set2, set3];
    
//display variable on the webpage
document.getElementById("disp1").innerHTML = array1;
}
