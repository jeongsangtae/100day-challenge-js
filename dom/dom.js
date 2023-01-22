// document.body.children[1].children[1].href = "https://google.com";

let alink = document.getElementById("external-link");

alink.href = "https://google.com";

alink = document.querySelector("#external-link");
alink.href = "https://google.com";

// ADD AN ELEMENTS
// 1. 새로운 요소 만든다.
let newAElement = document.createElement("a");
newAElement.href = "https://google.com";
newAElement.textContent = "This leads to Google!";

// 2. 새 요소를 보유해야하는 상위 요소에 대한 액세스 권한 얻는다.
let firstPElement = document.querySelector("p");

// 3. 상위 요소 콘텐츠에 새 요소 삽입
firstPElement.appendChild(newAElement);

// REMOVE ELEMENTS
// 1. 제거해야 하는 요소를 선택
let firstH1Element = document.querySelector("h1");

// 2. 그 요소를 삭제
firstH1Element.remove();
// 최신 브라우저를 사용한다면 이 방법이 더 짧고 편하다.

// firstH1Element.parentElement.removeChild(firstH1Element);
// 옛 버전 브라우저용

// MOVE ELEMENTS
firstPElement.parentElement.append(firstPElement);

// innerHTML
console.log(firstPElement.innerHTML);

firstPElement.innerHTML = "Hi! This is <strong>important!</strong>";
