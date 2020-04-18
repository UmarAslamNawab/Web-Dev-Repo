var cleanestCities = ["lahore", "islamabad", "murree", "hunza"];
var cityToCheck= "lahore"

//  for (var i = 0; i <= 3; i++) {
//      if (cityToCheck === cleanestCities[i]) {
//      alert("It's one of the cleanest cities");
//      }
//      else{
//          alert("Sorry")
//      }
//     }


// for (var i = 0; i < 10; i+=2) {   //0 2 4 6 8 
//   document.write("Hello World "+ i + "<br>");
// }


// i = 0
// i = i+1 //1 way
// i += 1  //2 way
// i++     //3 way










/** break statement **/

// for (var num = 0; num <= 10; num++) {
//   document.write(num + "<br>");
//   if (num === 5) {
//     break;
//   }
// }



// var cleanestCities = ["lahore", "islamabad", "murree", "hunza"];
// var cityToCheck = prompt("Enter city name");
// for (var i = 0; i < cleanestCities.length; i++) {
//   if (cityToCheck === cleanestCities[i]) {
//     alert("It's one of the cleanest cities");
//     break;
//   }
//   else{
//       alert("Sorry")
//   }
// }





/** flags **/
/** problem - without flags **/
// var cityToCheck = prompt("Enter city name");
// var cleanestCities = ["lahore", "islamabad", "murree", "hunza"];

// for (var i = 0; i < cleanestCities.length; i++) {
//   if (cityToCheck === cleanestCities[i]) {
//     alert("It's one of the cleanest cities");
//   } else {
//     alert("city not matched");
//   }
// }


/** solution - with flags **/
var cityToCheck = prompt("Enter city name");
var cleanestCities = ["lahore", "islamabad", "murree", "hunza"];
var matchFound = false; //flag

for (var i = 0; i < cleanestCities.length; i++) {
  if (cityToCheck === cleanestCities[i]) {
    matchFound = true;
  }
}

if (matchFound === true) {
  alert("It's one of the cleanest cities");
}
else if (matchFound === false) {
  alert("city not matched");
}



