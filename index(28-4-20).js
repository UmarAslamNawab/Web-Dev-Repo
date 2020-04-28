var text = "The World War II caused a major destruction to the overall economy of the world" //the Second World War

for (var i = 0; i < text.length; i++) {
    if (text.slice(i, i + 12) === "World War II") {
        text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
 }
}

console.log(text)


// "The the Second World War caused a major destruction to the overall economy of the world"

