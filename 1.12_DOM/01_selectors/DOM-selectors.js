console.log(
    document.getElementsByTagName("h1")
);
    
console.log(
    document.getElementById("first") // Single object
);

console.log(
    document.getElementsByClassName("second"), // Can be multiple objects
    document.getElementsByClassName("second")[0] // Select single object
);

console.log(
    document.querySelector("h1"),
    document.querySelector("li"), // Selects first item from object
    document.querySelectorAll("li") // Selects all items from object
);

console.log(
    document.querySelector("li").getAttribute("random"),
    document.querySelector("li").setAttribute("random", "42"), // Redefine "random"
    document.querySelector("li")
);

console.log(
    document.querySelector("h1"),
    document.querySelector("h1").style, // See CSS style
    // document.querySelector("h1").style.background = "yellow" // Injects CSS property to HTML
);

var h1 = document.querySelector("h1");
h1.className = "coolTitle";

console.log(
    document.querySelector("li").classList,
    document.querySelector("li").classList.add("coolTitle"),
    document.querySelector("li").classList.remove("coolTitle"),
    document.querySelector("li").classList.add("done"),
    document.querySelector("li").classList.toggle("done")
);

console.log(
    h1.innerHTML = "You are HACKED!"
);

console.log(
    document.querySelectorAll('li')[1],
    document.querySelectorAll('li')[1].parentElement,
    document.querySelectorAll('li')[1].parentElement.parentElement,
    document.querySelectorAll('li')[1].parentElement.parentElement.children
);

// It is important to CACHE selectors in variables

var li2 = document.querySelectorAll('li')[1];

console.log(
    // Using CACHE selection to avoid looking up elements each time:
    li2,
    li2.parentElement,
    li2.parentElement.parentElement,
    li2.parentElement.parentElement.children
);