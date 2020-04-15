//Array Assignment Q15
// var pets = ['dog', 'cat' , 'bird' , 'lizard', 'fish' ,'gerbil', 'snake'];
// console.log(pets)

// document.write("<select><option>"+pets[0]+"</option><option>"+pets[1]+"</option><option>"+pets[2]+"</option></select>")



//method "codePointAt" using this method it will convert any character into number
//e.g "a" to 97 & use like this in the example below


var myPromopt = prompt("Enter any Number/AlphaSbet & we'll tell you what it is?")
console.log(myPromopt)
var pos = 0 
var chngAscii=myPromopt.codePointAt(pos)
console.log(chngAscii)

if (chngAscii >=65 && chngAscii <= 90  ){
    document.write("<h1>" +"You Enter the Capital Letter " + myPromopt + " whose ASCII code is "+ chngAscii + "</h1>")
}
else if(chngAscii >=97  && chngAscii <= 122 ){
    document.write("<h1>" +"You Enter the Small Letter " + myPromopt+ " whose ASCII code is "+ chngAscii + "</h1>")
}
else if(chngAscii >=48 && chngAscii <= 57 ){
    document.write("<h1>" +"You Enter the Number " + myPromopt+ " whose ASCII code is "+ chngAscii + "</h1>")

}
else{
    document.write("<h1>"+ "You may enter something wrong "+ " whose ASCII code is "+ chngAscii + "</h1>")
}


//method "String.fromCharCode()" it will convert ant ASCII NUMBER ti its relevant character as 
//shown in this example

// var mychar = 97
// var result = String.fromCharCode(mychar)
// console.log(result)
// document.write("<h1>"+" The character at 97 in ASCII table is "+result + "</h1>")