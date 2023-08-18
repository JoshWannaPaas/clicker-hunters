/**
 * MAP, FILTER, and REDUCE
 * August 17, 2023
 */


// Lesson 1 - The Stupid Way Javascript Evolved For Loops

const list = ["A", "B", "C"]

// The classic iterator through the indexes
for (let i = 0; i < list.length; i++) {
  const item = list[i];
  console.log(item);
}

// Then ECMA said "Let's make this easier." And found a cool, hip keyword "in".
// ... The problem is that they implemented it wrong ...
for (let i in list) {
  const item = list[i];
  console.log(item);
}
// They made the "in" keyword return the INDEX. Every other language returns the VALUE

// Then ECMA said "Oops, my bad." And made a knew keyword, "of"
for (let item of list) {
  console.log(item);
}

// Conclusion: ECMA is dumb. Most often you want to use "of".A




// Lesson 2 - MAP, FILTER, REDUCE


// There's a fundamental problem with for loops, and its that they are sequential 
// You cannot process the second item until the first item 

// const data = [
//   {name: "Tommy", birthday: "August"},
//   {name: "Ellen", birthday: "November"},
// ] as const

// const list1 = [];
// for (let item of data) {
//   list1.push(item.name)
// }


// for (let i = 0; i < data.length; i++) {
//   const item = data[i];
//   // ... do stuff to item
// }

// for (let i in data) {
//   const item = data[i];
//   // ... do stuff to item
// }

// for (let item of data) {
//   // ... do stuff to item
// }

// data.forEach((item, i) => {
//   // ... do stuff
// })

// list1 = ["Tommy", "Ellen"]


// const list2 = data.map((item) => item.name)
// list2 = ["Tommy", "Ellen"]


// MAP
// Convert a list of element A to a list of element B of the same length
// For example, take list of All Student Data, convert to list of All Student Names

// const database = [
//   {name: "Tommy", birthday: "August"},
//   {name: "Ellen", birthday: "November"},
//   {name: "Sam", birthday: "May"},
//   {name: "Brithney", birthday: "March"},
//   {name: "Monte", birthday: "March"},
// ] as const;

// const studentNames = database.map(
//   (studentData) => {
//     return studentData.name;
//   }
// );

// FILTER
// Take a list of element A, and remove elements that don't satisfy a condition
const studentsBornInMarch = database.filter((studentData) => studentData.birthday === "March");
// = [ {name: "Brithney", birthday: "March"}, {name: "Monte", birthday: "March"} ]

// REDUCE
// Takes a list of element A and returns a single element B

