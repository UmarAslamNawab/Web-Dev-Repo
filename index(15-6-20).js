// var monkeyWindow = window.open()
// var windowContent = "<h1>Capuchin monkey</h1><img src= 'monkey.jpg'><p>The word capuchin derives from a group of friars<br>named the Order of Friars Minor Capuchin who wear<br>brown robes with large hoods covering their heads.</p>";
// monkeyWindow.document.write(windowContent);
// monkeyWindow.location.assign("http://www.animals.com/capuchin.html")
// monkeyWindow.location.href("http://www.animals.com/capuchin.html")


// var monkeyWindow2 = window.open("https://www.google.com")


// var monkeyWindow2 = window.open("while-dowhile-events(18-5-20)/events/index.html", "win1", "width=420,height=380,left=200,top=100");


function checkForPopBlocker() {
    var testPop = window.open("while-dowhile-events(18-5-20)/events/index.html", "","width=100,height=100");
    if (testPop === null || typeof(testPop === "undefined") ) {
    alert("Please disable your popup blocker.");
    }
    testPop.close();
    }
    
    
    
    
    