let inputElement = document.getElementById("product-name");
let remainingCharsElement = document.getElementById("remaining-chars");
let maxAllowLength = inputElement.maxLength;

function updateRemainingChars(event) {
  let enteredText = inputElement.value;
  // let enteredText = event.target.value;
  let enteredTextLength = enteredText.length;

  let remainingCharacters = maxAllowLength - enteredTextLength;
  remainingCharsElement.innerHTML = remainingCharacters;
}

inputElement.addEventListener("input", updateRemainingChars);
