for (let i = 0; i < 10; i++) {
  console.log(i);
}

const users = ["Jeong", "Anna", "sang", "tae", "Joel"];

for (const user of users) {
  console.log(user);
}

const loggedInUser = {
  name: "Jeong",
  age: 31,
  isAdmin: true,
};

for (const propertyName in loggedInUser) {
  console.log(propertyName);
  console.log(loggedInUser["name"]); // loggedInUser.name과 동일
  console.log(loggedInUser[propertyName]);
}

let isFinished = false;

while (!isFinished) {
  isFinished = confirm("Do you want to quit?");
}

console.log("Done!");
