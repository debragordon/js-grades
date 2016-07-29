// Loop over an array of student grades (values from 50-100) and outputs how many of each grades there are.

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A
// Start with array of random scores in your JavaScript

// var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
// Use console.log to output the following criteria:

// How many of each grade?
var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var gradeA = 0;
var gradeB = 0;
var gradeC = 0;
var gradeD = 0;
var gradeF = 0;

for (var i = 0; i < scores.length; i++) {
  if (scores[i] >= 91) {
    gradeA ++;
  } else if (scores[i] >= 81 && scores[i] <= 90) {
    gradeB ++;
  } else if (scores[i] >= 71 && scores[i] <= 80) {
    gradeC ++;
  } else if (scores[i] >= 61 && scores[i] <= 70) {
    gradeD ++;
  } else if (scores[i] <= 60) {
    gradeF ++;
  }
}
console.log("A's: " + gradeA + " B's: " + gradeB + " C's: " + gradeC + " D's: " + gradeD + " F's: " + gradeF);

// What is the lowest grade?
var lowGrade = Math.min.apply(null, scores);
console.log(lowGrade + " is the lowest grade in the class.");

// What is the highest grade?
var highGrade = Math.max.apply(null, scores);
console.log(highGrade + " is the lowest grade in the class.");





