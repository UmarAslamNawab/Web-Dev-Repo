
// function getGrade(percentage) {
//     var result;
//     if (percentage >= 80) {
//         result = "A-one grade";
//     }
//     else if (percentage >= 70) {
//         result = "A grade";
//     }
//     else if (percentage >= 60) {
//         result = "B grade";
//     }
//     return result;
// }

// var percentage = parseInt(prompt("What is your percentage"));
// alert(getGrade(percentage));
// document.write(    getGrade(percentage)     );

// alert(getGrade(82));
// document.write(getGrade(82));




function calcShippingCharges(amount) {
    return amount + 5;

}

// var res = 10 + calcShippingCharges(4); //19

// console.log(res)

// if (  calcShippingCharges(9) >= 10) {

//     alert("Good");

// }


// function myName(){
//     var fname = "Umar"
//     var lname = "Aslam"
//     var fullname = fname + " " + lname

//     // return fname + " "  + lname
//     return fullname

// }


// var funcCall = myName()
// alert(funcCall)




// function add(num1, num2) //5, 1
// {
//     return num1 + num2;
// }


// function increment(num) //5
// {
//     return add(num, 1); //6
// }

// alert(increment(5));




// function sayHello() {
//     console.log("Umar")
//     return "Umar";
//     alert("This will not execute ever");
//     document.write("nor this");
// }

// alert(sayHello());  //undefined




// function sayHello(num) //local variable
// {
//     var message = "Hello"; //local variable- scope
//     alert(message + num)
// }
// alert(message);//not allowed
// alert(num); //not allowed


// sayHello(4)

// var message = "Hi";     //global variable

// function sayHello(num) {
//     alert(message);
// }
// alert(message);
// sayHello();




// var message = "Hi";
// function sayHello(num) {
//     message = "Hello";
//     alert(message); //Hello
// }

// alert(message); //Hi //ex no 1
// sayHello(); // hello

// sayHello(); // hello //ex no 2
// alert(message); //hello 

// function sayHello() {
//     message = "Hello"; // //global variable becuase not using var keyword
//     alert(message);
// }

// sayHello();
// alert(message);





// function add() {
//     console.log(arguments);
// }

// // add(); //0
// // add(3); //1
// add(5, 7); //2



function chngCase(param) {
    var strng = param.toLowerCase().split(' ');
    for (var i = 0; i < strng.length; i++) {
        strng[i] = strng[i].charAt(0).toUpperCase() + strng[i].substring(1);     
    }
    return strng.join(' '); 
  }
 
console.log(chngCase("my name is umar aslam"));
document.write(chngCase("my name is umar aslam"))


// funcCall(parama,paramb)