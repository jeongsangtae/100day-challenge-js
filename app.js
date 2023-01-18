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

function resultAdultYears() {
  result = age - 10;
}

resultAdultYears();
console.log(result);

age = 50;
resultAdultYears();
console.log(result);
