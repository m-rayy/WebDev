// Test button:
var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function() {
    console.log("CLICK!!!");
});

button.addEventListener("mouseenter", function() {
    console.log("CLICK!!!");
});

button.addEventListener("mouseleave", function() {
    console.log("CLICK!!!");
});

// Enter item to list button:
var inputButton = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

// inputButton.addEventListener("click", function() {
//     if (inputLength() > 0) {
//         // console.log("enter button is working!");
//         createListElement();
//     }
// });

// // input.addEventListener("keypress", function() {
// //     // console.log(event);
// //     // console.log(event.which);
// //     if (inputLength() > 0 && event.which === 13) {
// //         createListElement();
// //     }
// // });

// input.addEventListener("keypress", function(event) {
//     // console.log(event);
//     // console.log(event.which);
//     if (inputLength() > 0 && event.keyCode === 13) {
//         createListElement();
//     }
// });

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

inputButton.addEventListener("click", addListAfterClick);

function addListAfterKeyPress(event) {
    if (inputLength > 0 && event.keyCode === 13) {
        createListElement();
    }
}

inputButton.addEventListener("keypress", addListAfterKeyPress);


// Important note!

// Event listener syntax : 

//     button.addEventListener("click", addListAfterClick);
//     input.addEventListener("keypress", addListAfterKeypress);

// You didn't see the function being called like this as you may have expected: 

//     button.addEventListener("click", addListAfterClick());
//     input.addEventListener("keypress", addListAfterKeypress(event));

// This is something called a callback function. When that line of javascript runs,
// we don't want the addListAfterClick function to run because we are just adding the event listener 
// now to wait for click or keypress. We want to let it know though that we want this action to happen
// when a click happens. So the function now automatically gets run (gets added the ()) every time the click happens.
// So we are passing a reference to the function without running it.


// Exercises

// 1. If you click on the list item, it toggles the .done  class on and off.
var shopping_list = document.querySelectorAll("li");

shopping_list.forEach(function(item) {
    item.addEventListener("click", function() {
        item.classList.toggle("done")
    });
})

// 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.
// Adjusted HTML file
var delete_buttons = document.getElementsByClassName("delete")

for(var i = 0; i < delete_buttons.length; i++){
	delete_buttons[i].addEventListener("click", function(event) {
        event.target.parentNode.remove()
    });
}

// 3. BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)


// 4. ADDITIONAL BONUS: When adding a new list item, it automatically adds event to toggle .done class