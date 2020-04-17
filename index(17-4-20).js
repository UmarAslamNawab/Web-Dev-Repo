
// for(var i=0 ; i<=4 ; i++){
// console.log("Umar")
// }

// var cityToCheck = prompt("Enter the name of your city?")
// var cleanestCities = ["karachi","lahore","pindi","islamabad","thatta"]

// if (cityToCheck === cleanestCities[0]) {
// alert("It's one of the cleanest cities");
// }
// else if (cityToCheck === cleanestCities[1]) {
// alert("It's one of the cleanest cities");
// }
// else if (cityToCheck === cleanestCities[2]) {
// alert("It's one of the cleanest cities");
// }
// else if (cityToCheck === cleanestCities[3]) {
// alert("It's one of the cleanest cities");
// }
// else if (cityToCheck === cleanestCities[4]) {
// alert("It's one of the cleanest cities");
// }
// else {
// alert("It's not on the list");
// }


// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         alert("It's one of the cleanest cities");
//     }
// }




// for(var i=0 ; i<=4 ; i++){
// console.log("Umar")
// }


/**
 if you want to run the same code over and over again, each time with a different value.
 */


/** without for loop **/

// var num = 0;
// document.write(num + "<br>");
// num += 1;
// document.write(num + "<br>");
// num += 1;
// document.write(num + "<br>");
// num += 1;
// document.write(num + "<br>");
// num += 1;
// document.write(num + "<br>");
// num += 1;
// document.write(num + "<br>");
// num += 1;
// document.write(num + "<br>");
// num += 1;
// document.write(num + "<br>");
// num += 1;
// document.write(num + "<br>");
// num += 1;
// document.write(num + "<br>");
// num += 1;
// document.write(num + "<br>");
// num += 1;

/** with for loop **/
// for (var i = 0; i <= 10; i++) {
//   document.write(i + "<br>");
// }


/** For Loops **/
/*
for (initializer ; condition ; incrementer/decrementer)
{
}
*/

/** structure **/
/**
 for ( ; ; )
 {
 }
 */


/**
 suppose we want to print “Hello World” 10 times.This can be done in two ways as shown below:
 */

// /** without for loop **/
// document.write("Hello World "+ "<br>");
// document.write("Hello World "+ "<br>");
// document.write("Hello World "+ "<br>");
// document.write("Hello World "+ "<br>");
// document.write("Hello World "+ "<br>");
// document.write("Hello World "+ "<br>");
// document.write("Hello World "+ "<br>");
// document.write("Hello World "+ "<br>");
// document.write("Hello World "+ "<br>");
// document.write("Hello World "+ "<br>");



/** with for loop **/
// for (var i = 0; i < 10; i++) {
//   document.write("Hello World " + "<br>");
// }



var cleanestCities = ["lahore", "islamabad", "murree", "hunza"];
document.write("<h4>Cleanest Cities List</h4>");
// console.log(cleanestCities.length)

for (var i = 0; i < cleanestCities.length ; i++) {
  document.write(cleanestCities[i] + " at index " + i + "<br>");
}

