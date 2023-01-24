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

// 세번째 연습: 사용자 데이터 표시 작업

const dummyUserData = {
  firstName: "Jeong",
  lastName: "SangTae",
  age: 31,
};

const displayUserDataButton = document.querySelector("#user-data button");

function displayUserData() {
  const outputUserData = document.getElementById("output-user-data");

  outputUserData.innerHTML = "";

  for (const key in dummyUserData) {
    const newUserDataListItem = document.createElement("li");
    const outputText = key.toUpperCase() + ": " + dummyUserData[key];
    newUserDataListItem.innerHTML = outputText;
    outputUserData.append(newUserDataListItem);
  }
}

displayUserDataButton.addEventListener("click", displayUserData);
