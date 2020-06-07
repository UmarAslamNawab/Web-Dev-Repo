// var target = document.getElementById("fp")
// var attr = target.hasAttribute("class")
// console.log(attr)

// var target2 = document.getElementById("fp")
// var attr2 = target2.getAttribute("class") //pclass ==> href = "facebook.com"
// console.log(attr2)

// var target3 = document.getElementById("fp2")
// var attr3 = target3.setAttribute("class" , "pclass2")
// console.log(target3)

// var target4 = document.getElementById("fp").attributes
// console.log(target4)

// var element = document.createElement("p") //<p></p>
// var text = document.createTextNode("Hello Paragraph") //"Hello Paragraph"
// // //<p>Hello Paragraph</p>
// element.setAttribute("class" , "newPara")
// element.appendChild(text)
// console.log(element)


// var trgtDiv= document.getElementById("ny")
// var element = document.createElement("p") //<p></p>
// var text = document.createTextNode("Hello Paragraph") //"Hello Paragraph"
// // //<p>Hello Paragraph</p>
// element.setAttribute("class" , "newPara")
// element.appendChild(text)
// trgtDiv.appendChild(element)
// console.log(element)
// console.log(trgtDiv.childNodes)

// var trgtDiv= document.getElementById("ny")
// var element = document.createElement("p") //<p></p>
// var text = document.createTextNode("Hello Paragraph") //"Hello Paragraph"
// // //<p>Hello Paragraph</p>
// element.setAttribute("class" , "newPara")
// element.appendChild(text)
// var element2=trgtDiv.firstChild
// trgtDiv.insertBefore(element,element2)

// console.log(element2)


// var trgtDiv= document.getElementById("cal")
// var element = document.createElement("p") //<p></p>
// var text = document.createTextNode("Hello Paragraph") //"Hello Paragraph"
// // //<p>Hello Paragraph</p>
// element.setAttribute("class" , "newPara")
// element.appendChild(text)
// var element2=trgtDiv.childNodes[1]
// trgtDiv.insertBefore(element,element2.nextSibling)

// console.log(element2)



var trgtDiv= document.getElementById("cal")
var element2=trgtDiv.childNodes[2]
trgtDiv.removeChild(element2)
