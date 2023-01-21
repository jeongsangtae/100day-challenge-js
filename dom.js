// document.body.children[1].children[1].href = "https://google.com";

let alink = document.getElementById("external-link");

alink.href = "https://google.com";

alink = document.querySelector("#external-link");
alink.href = "https://google.com";

//ADD AN ELEMENT
// 1. Create the new element

let newAElement = document.createElement("a");
newAElement.href = "https://google.com";
newAElement.textContent = "This leads to Google!";

// 2. Get access to the parent element that should hold the new element

let firstPElement = document.querySelector("p");

// 3. Insert the new element into the parent element content

firstPElement.appendChild(newAElement);
