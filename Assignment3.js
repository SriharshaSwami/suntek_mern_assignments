// ASSIGNMENT 1:
// -------------
// You are building a shopping cart summary for an e-commerce website.

// Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// Tasks:
    
// Use filter() to get only inStock products
let res1 = cart.filter(item => item.inStock)
console.log(res1)

// Use map() to create a new array with:  { name, totalPrice }
let res2 = cart.map((item) => {
    return {
        name: item.name,
        totalPrice: item.price * item.quantity
    }
})
console.log(res2)

// Use reduce() to calculate grand total cart value
let res3 = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
console.log(res3)

// Use find() to get details of "Mouse"
let res4 = cart.find(item => item.name === "Mouse")
console.log(res4)

// Use findIndex() to find the position of "Keyboard"
let res5 = cart.findIndex(item => item.name === "Keyboard")
console.log(res5)

// ASSIGNMENT 2:
// -------------
// Student Performance Dashboard

// You are working on a college result analysis system.

// Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// Tasks:
    
// filter() students who passed (marks ≥ 40)
let res6 = students.filter((student) => student.marks >= 40)
console.log(res6)

// map() to add a grade field
//         ≥90 → A
//         ≥75 → B
//         ≥60 → C
//         else → D
let res7 = students.map((student) => {
    if(student.marks >= 90){student.grade = "A"}
    else if(student.marks >= 75){student.grade = "B"}
    else if(student.marks >= 60){student.grade = "C"}
    else{student.grade = "D"}
})
console.log(students)
   
// reduce() to calculate average marks
let res8 = students.reduce((acc, student) => acc + student.marks, 0)
console.log(res8 / students.length)

// find() the student who scored 92
let res9 = students.find((student) => student.marks === 92)
console.log(res9)

// findIndex() of student "Kiran"
let res10 = students.findIndex(student => student.name == "Kiran")
console.log(res10)


// ASSIGNMENT 3: Employee Payroll Processor
// ----------------------------------------

// 1. filter() employees from IT department
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
const itEmployees = employees.filter(e => e.department === "IT");
console.log("IT Employees:", itEmployees);

// 2. map() to add netSalary = salary + 10% bonus
const employeesWithBonus = employees.map(e => ({
  ...e,
  netSalary: e.salary + e.salary * 0.1
}));
console.log("Employees with Bonus:", employeesWithBonus);

// 3. reduce() to calculate total salary payout
const totalPayout = employees.reduce((sum, e) => sum + e.salary, 0);
console.log("Total Salary Payout:", totalPayout);

// 4. find() employee with salary 30000
const employeeWith30k = employees.find(e => e.salary === 30000);
console.log("Employee with 30000 Salary:", employeeWith30k);

// 5. findIndex() of employee "Neha"
const nehaIndex = employees.findIndex(e => e.name === "Neha");
console.log("Neha Index:", nehaIndex);


// ASSIGNMENT 4: Movie Streaming Platform
// --------------------------------------

// 1. filter() only "Sci-Fi" movies
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
const sciFiMovies = movies.filter(m => m.genre === "Sci-Fi");
console.log("Sci-Fi Movies:", sciFiMovies);

// 2. map() to return "Title (Rating)"
const movieSummary = movies.map(m => `${m.title} (${m.rating})`);
console.log("Movie Summary:", movieSummary);

// 3. reduce() to find average movie rating
const avgRating = movies.reduce((sum, m) => sum + m.rating, 0) / movies.length;
console.log("Average Rating:", avgRating);

// 4. find() movie "Joker"
const jokerMovie = movies.find(m => m.title === "Joker");
console.log("Joker Movie:", jokerMovie);

// 5. findIndex() of "Avengers"
const avengersIndex = movies.findIndex(m => m.title === "Avengers");
console.log("Avengers Index:", avengersIndex);


// ASSIGNMENT 5: Bank Transaction Analyzer
// ---------------------------------------

// 1. filter() all credit transactions
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
const creditTransactions = transactions.filter(t => t.type === "credit");
console.log("Credit Transactions:", creditTransactions);

// 2. map() to extract only transaction amounts
const transactionAmounts = transactions.map(t => t.amount);
console.log("Transaction Amounts:", transactionAmounts);

// 3. reduce() to calculate final account balance
// credit adds money, debit subtracts money
const finalBalance = transactions.reduce((balance, t) => {
  return t.type === "credit" ? balance + t.amount : balance - t.amount;
}, 0);
console.log("Final Account Balance:", finalBalance);

// 4. find() the first debit transaction
const firstDebit = transactions.find(t => t.type === "debit");
console.log("First Debit Transaction:", firstDebit);

// 5. findIndex() of transaction with amount 10000
const indexOf10k = transactions.findIndex(t => t.amount === 10000);
console.log("Index of Transaction with 10000:", indexOf10k);