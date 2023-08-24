/**
 * MAP, FILTER, and REDUCE
 * August 17, 2023
 */

// ============================================================== //
// === Lesson 1 - The Stupid Way Javascript Evolved For Loops === //
// ============================================================== //

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



// ============================================================== //
// =============== Lesson 2 - MAP, FILTER, REDUCE =============== //
// ============================================================== //

// There's a fundamental problem with for loops, and its that they are sequential 
// You cannot process the second item until the first item is done. 

// This is where Google invented the MAP-FILTER-REDUCE methodology to allow for 
// distributed computing. 

// All of these operations take a function that looks at ONE element A and converts it to ONE element B. 
// Because the function guarantees it only cares about one item at a time, we can split up 
// the list. Parallelism! Divide and Conquer baby. In modern computers, you achieve speed ups by 
// distributing work between different cores of the CPU, instead of different ful computers. 

type StudentInfo = {
  name: string; 
  gpa: number;
};

const students: StudentInfo[] = [
  {name: "Tommy", gpa: 3.99},
  {name: "Joshua", gpa: 3.95},
  {name: "Ellen", gpa: 3.90},
  {name: "Guillermo", gpa: 2.00},
];

// Part 1: MAP
// Converts a list of element A to a list of element B

/** A function that converts a student to their name */
const toName = (studentInfo: StudentInfo) => studentInfo.name;
const names = students.map(toName);
console.log(names);

// Part 2: FILTER
// Removes elements that don't satisfy a condition

/** A function that returns true if GPA is high */
const isHonors = (studentInfo: StudentInfo) => studentInfo.gpa > 3.0;
const honors = students.map(isHonors);
console.log(honors);

// Part 3: REDUCE
// Combine the list into a single value.

const numbers = [2, 4, 8, 16];
const sum = numbers.reduce((prevNumber, currNumber) => prevNumber + currNumber);
console.log(sum);

/**
 * Read more here:
 * - https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
 */
