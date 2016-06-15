//Create an array of Countries England, France, Italy, //Mexico, 
//Poland, Russia, China, Greece, Egypt, India
//Create a  user text input field. User can enter a //country. The array is searched and when a match is found //the position in the array is displayed and the user is //given a message to inform whether the country is present //or not in the array.

//replace button 
var event1 = document.getElementById("button1");
event1.addEventListener('click', countryCheck, false);



//array of countries
var array1 = ["England", "France", "Italy", "Mexico", "Poland", "Russia", "China", "Greece", "Egypt", "India"];
    
//loop the array 
function countryCheck() {
    var country1 = document.getElementById("input1").value;
     var findCount = array1.indexOf(country1);
    
    if (findCount > -1){
        document.getElementById("disp1").innerHTML = "Yes, " + country1 + " is in the array at index " + (findCount+1);
    }
    else{
        document.getElementById("disp1").innerHTML = "Sorry, it's not in here!";
    }
    
}
