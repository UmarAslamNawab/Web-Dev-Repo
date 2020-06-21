// email = "umar@.com"       5> (9-5)4 ===> 5 > 4


//  function validateEmail() {
//     var addressIsLegal = true;
//     var eEntered = document.getElementById("address").value;
//     if (eEntered.indexOf(" ") !== -1) {
//     addressIsLegal = false;
//     }
//     if (eEntered.indexOf("@") < 1 || eEntered.indexOf("@") > (eEntered.length-5)) {
//     addressIsLegal = false;
//     }

//   if (eEntered.indexOf(".") - eEntered.indexOf("@") < 2 ||
//   eEntered.indexOf(".") > eEntered.length - 3) {                
//   addressIsLegal = false;
//      }
//      if (addressIsLegal === false) {
//      alert("Please correct email address");
//      return false;
//      }
//      }



// function validateEmail() {
//    var eEntered = document.getElementById("address").value;
//    var regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
//    if (!(eEntered.match(regex))) {
//    alert("Please correct email address");
//    return false;
//    }
//      }



// function greetWorld() {
//      try {
//      var greeting = "Hello world!";
//      aler(greeting);
//      }
//      catch(myErr) {
//      alert(myErr);
//      }
//      }


// greetWorld()     

    //  ab@.co    2 > (6-5) 1 == true


    // "umar@email.com" "u@.co"



// function checkPassword() {
//     try {
//     var pass = document.getElementById("f1").value;
//     if (pass.length < 8) {
//     throw "Please enter at least 8 characters.";
//     }
//     if (pass.indexOf(" ") !== -1) {
//     throw "No spaces in the password, please.";
//     }
//      var numberSomewhere = false;
//      for (var i = 0; i < pass.length; i++) {
//      if (isNaN(pass(i, i+1)) === false) {
//      numberSomewhere = true;
//      break;
//      }
//      }
//      if (numberSomewhere === false) {
//      throw "Include at least 1 number.";
//      }
//      }
//      catch(err) {
//      alert(err);
//      }
//      }    


var b1 = document.getElementById("button1");
b1.onclick = sayHello;

function sayHello() {
     alert("Hi there.");
 }