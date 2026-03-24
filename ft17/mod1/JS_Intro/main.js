console.log("JS is connected")
// Input two integers
let num1 = 5;
let num2 = 10;

// Check and display the largest
if (num1 > num2) {
    console.log("The largest number is: " + num1);
} else if (num2 > num1) {
    console.log("The largest number is: " + num2);
} else {
    console.log("Both numbers are equal.");
}
 // Input 3 integers 
 let no1 = 10;
let no2 = 25;
let no3 = 15;

let largest;

if (no1 >= no2 && no1 >= no3) {
    largest = no1;
} else if (no2 >= no1 && no2 >= no3) {
    largest = no2;
} else {
    largest = no3;
}

console.log("The largest number is: " + largest);
// Question 7
let a = 27;
let b = 57;
let c = 87;

// Get last digits
let lastA = a % 10;
let lastB = b % 10;
let lastC = c % 10;

// Check if all last digits are the same
if (lastA === lastB && lastB === lastC) {
    console.log("Yes, all three numbers have the same last digit.");
} else {
    console.log("No, the last digits are not the same.");
}
// checking if digits are the same
function areAllDigitsSame(num) {
    let str = num.toString();
    
    for (let i = 1; i < str.length; i++) {
        if (str[i] !== str[0]) {
            return false;
        }
    }
    return true;
}

// Example usage
console.log(areAllDigitsSame(1111)); // true
console.log(areAllDigitsSame(1234)); // false
console.log(areAllDigitsSame(777));  // true
// Question 2
const students = [
    { name: "Jane", marks: 80 },
    { name: "Ciara", marks: 77 },
    { name: "Smith", marks: 88 },
    { name: "Thomas", marks: 95 },
    { name: "Shelby", marks: 68 }
];

// Calculate total marks
let total = 0;

for (let i = 0; i < students.length; i++) {
    total += students[i].marks;
}

// Calculate average
let average = total / students.length;

// Determine grade
let grade;

if (average < 60) {
    grade = "F";
} else if (average < 70) {
    grade = "D";
} else if (average < 80) {
    grade = "C";
} else if (average < 90) {
    grade = "B";
} else if (average < 100) {
    grade = "A";
}

// Output result
console.log("Average Marks: " + average);
console.log("Grade: " + grade);
// Quiz 3
function differenceWith13(num) {
    if (num > 13) {
        return 2 * Math.abs(num - 13);
    } else {
        return 13 - num;
    }
}

// Example usage
console.log(differenceWith13(10)); // 3
console.log(differenceWith13(20)); // 14
// Quiz 4
function checkNumbers(num1, num2) {
    if (num1 === 50 || num2 === 50) {
        return true;
    } else if (num1 + num2 === 50) {
        return true;
    } else {
        return false;
    }
}

// Example usage
console.log(checkNumbers(50, 10)); // true
console.log(checkNumbers(20, 30)); // true
console.log(checkNumbers(10, 15)); // false
//Quiz 5
function swapFirstLast(str) {
    if (str.length <= 1) {
        return str;
    }

    let first = str[0];
    let last = str[str.length - 1];
    let middle = str.slice(1, str.length - 1);

    return last + middle + first;
}

// Example usage
console.log(swapFirstLast("hello")); // oellh
console.log(swapFirstLast("a"));     // a
console.log(swapFirstLast("ab"));    // ba