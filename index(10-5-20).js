function increment(num) { // parameter
    num++;
    document.write("<br>Number is " + num);
}

// increment(4); //passing argument

// increment(34); //passing argument

// increment(100); //passing argument
/** send 3 argument 4,7,9 but get only one parameter inside increment function */
// increment(4, 7, 9); //passing argument




function add(num1, num2) //parameters
{
    var sum = num1 + num2;
    document.write("<br>Sum is " + sum);
}

// add(4, 2); //passing arguments

// add(56, 980); //passing arguments




function greetUser(username) {
    document.write("Welcome, " + username);
}

// greetUser(); // call empty

// greetUser("Haider"); //passing argument

// greetUser("Haider Ali Shah"); //passing argument

// greetUser("Ali"); //passing argument

// var username = prompt("What is your name?","Ali Mughal");
// greetUser(username); // passing prompt result as a argument


/**
As arguments, you can use any combination of variables, strings, and literal numbers. In
the following example, the calling code passes a variable, a string, and a number to the
function. Three parameters catch the values. The function concatenates them to create an alert
message.
 */

// function showMessage(m, string, num) {
//     alert(m + string + num);
// }

// var month = "March";


// showMessage(month, "'s winner number is ", 23);


/** Functions:
Passing data back from them using return keyword*/

// function convertToUpperCase(str) {
//     var result = str.toUpperCase();
//     return result
// }

// var finalRes =convertToUpperCase("Umar Aslam");


// alert(finalRes)
// document.write(finalRes)



function add(num1, num2) //parameters
{
    var sum = num1 + num2;
    return sum;
}

document.write("Sum is " + add(4, 6));



