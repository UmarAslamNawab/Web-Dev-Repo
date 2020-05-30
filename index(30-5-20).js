
// function Plan(naam, paisay, samaan, safhat, saal) {
//     this.name = naam;
//     this.price = paisay;
//     this.data = samaan;
//     this.pages = safhat;
//     this.regYear = saal;
//     this.getYears = function () {
//         var today = new Date();
//         var currentYear = today.getFullYear();
//         return currentYear - this.regYear;
//     }
// }

// var plan1 = new Plan("Basic", 3.99, "1000 gb/mo", 10, 2000);
// var plan2 = new Plan("Pro", 4.99, "2000 gb/mo", 15, 2010);
// console.log(plan1);

// document.write(plan1.getYears());
// document.write("<br>");
// document.write(plan2.getYears());




// function Plan(naam, paisay, samaan, safhat, saal) {
//     this.name = naam;`
//     this.price = paisay;
//     this.data = samaan;
//     this.pages = safhat;
//     this.regYear = saal;
//     // this.category = "Broadband";
// }
// console.log(new Plan()) // see eample that why using this

// Plan.prototype.category = "Broadband";

// Plan.prototype.getYears = function () {
//     // alert(abc)
//     var today = new Date();
//     var currentYear = today.getFullYear();
//     return currentYear - this.regYear;
// }
// var plan1 = new Plan("Basic", 3.99, "1000 gb/mo", 10, 2015);
// console.log(plan1)
// document.write(plan1.getYears());




// function Plan(naam, paisay, samaan, safhat, saal) {
//     this.name = naam;
//     this.price = paisay;
//     this.data = samaan;
//     this.pages = safhat;
//     this.regYear = saal;
// }

// var plan1 = new Plan("Basic", 3.99, "1000 gb/mo", 10, 2000);
// console.log("Plan 1 Obj",plan1)
// // document.write(plan1)

// // ["abc",123,true,789]

// // loop for object
// for (p in plan1) {
//     document.write(p + " : " + plan1[p] + "<br>");
// }




function Plan(naam, paisay, samaan, safhat, saal) {
    this.name = naam;
    this.price = paisay;
    this.data = samaan;
    this.pages = safhat;
    this.regYear = saal;
}

Plan.prototype.getYears = function () {
    var today = new Date();
    var currentYear = today.getFullYear();
    return currentYear - this.regYear;
}

var plan1 = new Plan("Basic", 3.99, "1000 gb/mo", 10, 2000);

var exists = "getYears" in plan1;
alert(exists);