//Create an array variable with 10 elements and using a //for loop  display each element on the webpage

//replace button 
var event1 = document.getElementById("button1");
event1.addEventListener('click', dispVar, false);


//loop the array 
function dispVar() {
    
    var array1 = ["apple", "box", "cat", "dog", "egg", "fox", "gift", "hen", "ink", "jam"];
    
    var textString = "";
    for(i = 0; i < array1.length; i++){
        
        textString += array1[i];
        document.getElementById("disp1").innerHTML = textString;
    }
}
