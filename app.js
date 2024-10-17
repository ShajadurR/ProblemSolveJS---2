// Practice Problem 2

// Write a program to calculate the average marks of Mathematics, Biology, Chemistry,
// Physics, and Bangla of a student.

// Input:
// respectively.
// The first line of the input is the marks of the five subjects mentioned above,

// Output:
// Print the result in 2 decimal places.
// Sample Input:
// 75.25, 65, 80, 35.45, 99.50
// Output:
// 71.04


const totalSubjects = 5;

let mathematicsMarks = 75.25;
let biologyMarks = 65;
let chemistryMarks = 80;
let physicsMarks = 35.45;
let banglaMarks = 99.50;

const totalMarks = mathematicsMarks + biologyMarks + chemistryMarks + physicsMarks + banglaMarks;
console.log(totalMarks.toFixed(2));
const avetageMarks = totalMarks / totalSubjects;
console.log(avetageMarks.toFixed(2));