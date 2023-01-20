//Math operations

console.log(10 % 4);
console.log(10 % 3);

let result = (10 + 3 - 5) * 10;
result = 10 * 4;
result++; // result = result + 1
console.log(result);
result--; // result = result - 1
console.log(result);

result += 5; // result = result + 5
console.log(result);
result -= 5; // result = result - 5
console.log(result);
result /= 5; // result = result / 5
console.log(result);
result *= 5; // result = result * 5
console.log(result);

//Text operations

console.log("Jeong " + "sang tae");
console.log("Jeong " - "ong"); // NaN, 문자열을 숫자로 변환 실패
console.log("hi" * 3); // NaN, 문자열을 숫자로 변환 실패
console.log("2" * 3); // 6, 문자열을 숫자로 변환 성공

let userName = "Jeong";
console.log(userName.length); // 문자 길이를 알려줌
console.log(userName.toUpperCase()); // 글자 모두 대문자

let hobbies = ["game", "study"];
console.log(hobbies.length); // 배열 갯수을 알려줌
console.log(hobbies);
