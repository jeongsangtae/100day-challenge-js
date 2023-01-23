const inputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");
const maxAllowLength = inputElement.maxLength;

function updateRemainingChars(event) {
  const enteredText = inputElement.value;
  // const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;

  const remainingCharacters = maxAllowLength - enteredTextLength;
  remainingCharsElement.innerHTML = remainingCharacters;
  if (remainingCharacters < 10) {
    // remainingCharsElement.style.color = "red";
    inputElement.classList.add("warning");
    remainingCharsElement.classList.add("warning");
  } else {
    // remainingCharsElement.style.color = "black";
    inputElement.classList.remove("warning");
    remainingCharsElement.classList.remove("warning");
  }
}

inputElement.addEventListener("input", updateRemainingChars);
