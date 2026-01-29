// Assignment 1: Daily Temperature Analyzer

// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:

const temperatures = [32, 35, 28, 40, 38, 30, 42];
//     1. filter() temperatures above 35
let res1 = temperatures.filter(temp=>temp>35)
console.log(res1)

//     2. map() to convert all temperatures from Celsius → Fahrenheit
let res2 = temperatures.map(temp => temp * 1.8 + 32)
console.log(res2)

//     3. reduce() to calculate average temperature
let res3 = temperatures.reduce((acc, temp) => acc + temp)
console.log(res3 / temperatures.length)

//     4. find() first temperature above 40
let res4 = temperatures.find(temp =>{
    if(temp > 40){
        return temp
    }
})
console.log(res4)

//     5. findIndex() of temperature 28
let res5 = temperatures.findIndex(temp => temp == 28)
console.log(res5)

// Assignment 2: Online Course Name Processor
// Scenario : You are preparing a course list for display on a website.

const courses = ["javascript", "react", "node", "mongodb", "express"];


// Tasks:
//     1. filter() courses with name length > 5
let res6 = courses.filter(course => course.length > 5)
console.log(res6)

//     2. map() to convert course names to uppercase
let res7 = courses.map(course => course.toUpperCase())
console.log(res7)

//     3. reduce() to generate a single string:
//       "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
let res8 = courses.reduce((acc, course) => acc + course, "")
console.log(res8)

//     4. find() the course "react"
let res9= courses.find(course => course === "react")
console.log(res9)

//     5. findIndex() of "node"
let res10 = courses.findIndex(course => course == "node")
console.log(res10)

// Assignment 3: Student Marks List
// Scenario : You receive marks from an exam system.

// Test data:
const marks = [78, 92, 35, 88, 40, 67];

// Tasks:
//     1. filter() marks ≥ 40 (pass marks)
let res11 = marks.filter(mark => mark >= 40)
console.log(res11)

//     2. map() to add 5 grace marks to each student
let res12 = marks.map(mark => mark + 5)
console.log(res12)

//     3. reduce() to find highest mark
let res13 = marks.reduce((maxi, mark) => {
    if(mark > maxi){
        maxi = mark
    }
    return maxi
})
console.log(res13)

//     4. find() first mark below 40
let res14 = marks.find(mark => mark < 40)
console.log(res14)

//     5. findIndex() of mark 92
let res15 = marks.findIndex(mark => mark === 92)
console.log(res15)