const inputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");
const maxAllowLength = inputElement.maxLength;

function updateRemainingChars(event) {
  const enteredText = inputElement.value;
  // const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;

  const remainingCharacters = maxAllowLength - enteredTextLength;
  remainingCharsElement.innerHTML = remainingCharacters;
  console.log(remainingCharacters);
  if (remainingCharacters === 0) {
    // remainingCharsElement.style.color = "red";
    inputElement.classList.add("error");
    remainingCharsElement.classList.add("error");
  } else if (remainingCharacters < 10) {
    inputElement.classList.add("warning");
    remainingCharsElement.classList.add("warning");
    inputElement.classList.remove("error");
    remainingCharsElement.classList.remove("error");
  } else {
    // remainingCharsElement.style.color = "black";
    inputElement.classList.remove("error", "warning");
    remainingCharsElement.classList.remove("error", "warning");
  }
}

inputElement.addEventListener("input", updateRemainingChars);
