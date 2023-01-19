let age = 31;
let userName = "Jeong";
let hobbies = [
  "Study",
  "Game",
  "Music",
  "Movie",
  "Cooking",
  "Sports",
  "Reading",
];
let job = {
  developer: [
    {
      id: 1,
      name: "jeong",
    },
    {
      id: 2,
      name: "sang",
    },
  ],
  teacher: [
    {
      id: 2,
      name: "sang",
    },
  ],
};

let totalAdultYears;

function resultAdultYears(userAge) {
  return userAge - 10;
}

totalAdultYears = resultAdultYears(100);
console.log(totalAdultYears);

age = 50;
totalAdultYears = resultAdultYears(age);
console.log(totalAdultYears);

totalAdultYears = resultAdultYears("Hi");
console.log(totalAdultYears);

let person = {
  name: "jeong", // Property(속성)
  greeting() {
    console.log("hello!");
  }, // Method(메서드)
};

person.greeting();
