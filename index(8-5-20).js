// A function is a block of JavaScript that robotically does the same thing again and again,
// whenever you invoke(call) its name. It saves you repetitive coding and makes your code easier to
// understand.
// On your website, suppose there are several pages where you want to display an alert that
// tells the user the current time.
// The code might look like this


// var currentTime = new Date().toLocaleTimeString();
// alert("time: " + currentTime);


// You could write this block of code over and over again, every time you need it. Or you
// could write it once as a function, naming it, say, tellTime.
// How to write a function?
// You can give a function any name that would be a legal variable name, then add
// parentheses. Function-naming follows the same rules as variable naming, like this
// function functionname() {
//     code to be executed
// }



/*
function declaration
*/
// function tellTime() {
//     var currentTime = new Date().toLocaleTimeString();
//     alert("time: " + currentTime);
// }
// /*
//     function call
//  */
// tellTime();


/** alert is also a function */
// alert("hello");

// var greeting = alert;
// console.log(typeof greeting); // function
// greeting("Hello");


/**
Suppose that when you write greetUser(); a function is called that displays an alert
saying, "Hello, there."
This is the code for the function.
 */

// function greetUser(){
//     var answer=prompt("What is your name?")
//     alert("Hello, there. " +  answer)
// }

// greetUser()

/**
 Now, instead of just call the function like greetUser(), you're going to calling it and passing data to it.
 The string inside the parentheses, i.e. the data you're passing, is called an argument.
 */

function greetUser(name) {
    alert(name);
}

// var myname = prompt("what is your name?")
// greetUser(myname)
// greetUser(); //if I'm not passing any thing alert will be show undefined



