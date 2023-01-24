// 첫번째 연습: 입력된 숫자 값까지 더하는 계산기

const calculateSumButton = document.querySelector("#calculator button");

function calculateSum() {
  const userNumberElement = document.getElementById("user-number");
  const enterNumber = userNumberElement.value;

  let sumUpToNumber = 0;

  for (let i = 0; i <= enterNumber; i++) {
    sumUpToNumber = sumUpToNumber + i;
  }

  const outputResultElement = document.getElementById("calculated-sum");

  outputResultElement.innerHTML = sumUpToNumber;
  outputResultElement.style.display = "block";
}

calculateSumButton.addEventListener("click", calculateSum);

// 두번째 연습: 하이라이트 링크

const highlightLinkButton = document.querySelector("#highlight-links button");

function highlightLinks() {
  const aElements = document.querySelectorAll("#highlight-links a");

  for (const aElement of aElements) {
    aElement.classList.add("highlight");
  }
}

highlightLinkButton.addEventListener("click", highlightLinks);
