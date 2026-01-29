// Assignment 1: User Profile Manager-

// Test data
const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};

// 1. Print the user's name and email
console.log("Username is", user.name, "and email is", user.email);

// 2. Add a new property lastLogin
user.lastLogin = "2026-01-01";

// 3. Update role from student to admin
user.role = "admin";

// 4. Delete the isActive property
delete user.isActive;

// 5. List all remaining fields using Object.keys()
for (let k of Object.keys(user)) {
  console.log("Key:", k, "Value:", user[k]);
}


// Assignment 2: Exam Result Summary

// Test data
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

// 1. Calculate total marks
let total = 0;
for (let subject in marks) {
  total += marks[subject];
}
console.log("Total Marks:", total);

// 2. Calculate average marks
let average = total / Object.keys(marks).length;
console.log("Average Marks:", average);

// 3. Find the highest scoring subject
let highestSubject = "";
let highestScore = -1;
for (let subject in marks) {
  if (marks[subject] > highestScore) {
    highestScore = marks[subject];
    highestSubject = subject;
  }
}
console.log("Highest Scoring Subject:", highestSubject, "with", highestScore, "marks");

// 4. Add a new subject computer: 90
marks.computer = 90;
console.log("Updated Marks:", marks);


// Assignment 3: Application Settings Controller

// Test data
const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};

// 1. Toggle theme between light and dark
settings.theme = settings.theme === "light" ? "dark" : "light";
console.log("Theme after toggle:", settings.theme);

// 2. Turn autoSave to true
settings.autoSave = true;
console.log("AutoSave set to:", settings.autoSave);

// 3. Remove the notifications setting
delete settings.notifications;
console.log("Settings after removing notifications:", settings);

// 4. Freeze the settings object so it cannot be modified
Object.freeze(settings);
console.log("Settings object is now frozen:", settings);