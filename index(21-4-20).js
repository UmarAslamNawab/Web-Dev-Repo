/** nested for loops **/
// var firstNames = ["Ali", "Sami", "Bilal"];
// var lastNames = ["Khan", "Baig"];

// for (var i = 0; i < firstNames.length; i++) {         //Ali Khan , Ali Baig ,Sami Khan , Sami Baig , Bilal Khan , Bilal Baig
//   for (var j = 0; j < lastNames.length; j++) {
//     document.write(firstNames[i] + " " + lastNames[j]);
//     document.write("<br>");
//   }
// }



// for (var i = 0; i < 4; i++) // 4 times
// {
//   for (var t = 0; t <= 2; t++) // 3 times
//   {
//     alert("Hello");
//   }
// }
/** 4 * 3 = 12 times */




/** when no curly braces are used, first immediate statement is 
 considered as it's in the body of the statement **/
// var myArray = [2, 5, 2, 4];
// for (var i = 0; i < myArray.length; i++)
//   console.log(myArray[i]);
// alert("done!");

/*
 here,
 for (var i = 0 ; i < myArray.length; i++)
    console.log(myArray[i]);
 is same as
 for (var i = 0 ; i < myArray.length; i++)
 {
    console.log(myArray[i]);
 }
 */


/** for loop - optional statements **/

// var num = 0;
// for (  ; num <= 10; num++) {
//   document.write(num + "<br>");
// }


/** for loop - optional statements **/

// for (var num = 0; ; num++) {
//   if (num <= 10) {
//     document.write(num + "<br>");
//   }
//   else {
// break;
//   }
// }


/** for loop - optional statements **/

// for (var num = 0; num <= 10;) {
//   document.write(num + "<br>");
//   num++; 
// }