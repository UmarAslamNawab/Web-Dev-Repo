// function checkForLastName() { 
//     var targetField = document.getElementById("lastNameField");
//  if (targetField.value.length === 0) {
//  alert("Please enter your last name");
//  targetField.focus();
//  targetField.style.background = "yellow";
//  return false;
//  }
//  targetField.style.background = "white";
// }

 
// function checkForSelection() {
// if (document.getElementById("states").selectedIndex === 0) {
// alert("Please select a state.");
// return false;
// }
// }


// function checkForSelection(selecID) {
// var target = document.getElementById(selecID);
// if (target.selectedIndex === 0) {
// alert("Please select a state.");
// return false;
// }
// }



// function validateRadios(attr) {
// var radios = document.getElementsByName(attr);
// for (var i = 0; i < radios.length; i++) {
// if (radios[i].checked) {
// return true;
// }
// }
// alert("Please check one.");
// return false;
//  }



// function validateZIP() {
//    var valueEntered = document.getElementById("zip").value;
//    console.log(typeof(valueEntered))
//    var numChars = valueEntered.length;
//    if (numChars < 5) {
//    alert("Please enter a 5-digit code.");
//    return false;
//   }
//    for (var i = 0; i <= 4; i++) {
//    var thisChar = parseInt(valueEntered[i]);  //a ==> NaN
//     if (isNaN(thisChar)) {
//     alert("Please enter only numbers.");
//     return false;
//    }
//   }
// }



function validateEmail() {
    var eEntered = document.getElementById("email").value;
    if (eEntered.indexOf(" ") !== -1) {            //u mar @email. co m  -1//when thing is not present
    alert("No spaces allowed in address");
    return false;
    }
    }