let pElement = document.querySelector("p");

function changePElement(event) {
  pElement.innerHTML = "Clicked";
  console.log("padd");
  console.log(event);
}

pElement.addEventListener("click", changePElement);

let inputElement = document.querySelector("input");

function addInputElement(inputevent) {
  // let inputText = inputElement.value;
  let inputText = inputevent.target.value;
  // let inputText = event.data; => 위에 두개랑 다름
  console.log(inputText);
  // console.log(inputevent);
}

inputElement.addEventListener("input", addInputElement);
