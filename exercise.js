// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course
let courceName = "Online Course";
let courceprice = 12000;
let mainGoal = ["guts", "effort", "patience"];

// 2) Output ("alert") the three variable values

console.log(courceName);
console.log(courceprice);
console.log(mainGoal);

// 3) Try "grouping" the three variables together and still output their values thereafter

let courceGroup = {
  name: courceName,
  price: courceprice,
  goal: mainGoal,
};

console.log(courceGroup);
console.log(courceGroup.name);
console.log(courceGroup.price);
console.log(courceGroup.goal);

// 4) Also output the second element in your "main goals" variable

console.log(courceGroup.goal[1]);

// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
// 6) Execute your custom command from (5) and output ("alert") the result
