const inputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");
const maxAllowLength = inputElement.maxLength;

function updateRemainingChars(event) {
  const enteredText = inputElement.value;
  // const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;

  const remainingCharacters = maxAllowLength - enteredTextLength;
  remainingCharsElement.innerHTML = remainingCharacters;
  if (enteredTextLength > 50) {
    // remainingCharsElement.style.color = "red";
    remainingCharsElement.classList.add("warning");
  } else if (enteredTextLength <= 50) {
    // remainingCharsElement.style.color = "black";
    remainingCharsElement.classList.remove("warning");
  }
}

inputElement.addEventListener("input", updateRemainingChars);
