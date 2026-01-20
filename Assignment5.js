// ASSIGNMENT 1: Shopping Cart Summary

// Test Data
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// 1. Use filter() to get only inStock products
const inStockProducts = cart.filter(item => item.inStock);
console.log("In Stock Products:", inStockProducts);

// 2. Use map() to create a new array with { name, totalPrice }
const productSummary = cart.map(item => ({
  name: item.name,
  totalPrice: item.price * item.quantity
}));
console.log("Product Summary:", productSummary);

// 3. Use reduce() to calculate grand total cart value
const grandTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
console.log("Grand Total:", grandTotal);

// 4. Use find() to get details of "Mouse"
const mouseDetails = cart.find(item => item.name === "Mouse");
console.log("Mouse Details:", mouseDetails);

// 5. Use findIndex() to find the position of "Keyboard"
const keyboardIndex = cart.findIndex(item => item.name === "Keyboard");
console.log("Keyboard Index:", keyboardIndex);


// ASSIGNMENT 2: Student Performance Dashboard

// Test Data
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// 1. filter() students who passed (marks ≥ 40)
const passedStudents = students.filter(s => s.marks >= 40);
console.log("Passed Students:", passedStudents);

// 2. map() to add a grade field
const gradedStudents = students.map(s => {
  let grade;
  if (s.marks >= 90) grade = "A";
  else if (s.marks >= 75) grade = "B";
  else if (s.marks >= 60) grade = "C";
  else grade = "D";
  return { ...s, grade };
});
console.log("Graded Students:", gradedStudents);

// 3. reduce() to calculate average marks
const avgMarks = students.reduce((sum, s) => sum + s.marks, 0) / students.length;
console.log("Average Marks:", avgMarks);

// 4. find() the student who scored 92
const topper = students.find(s => s.marks === 92);
console.log("Topper:", topper);

// 5. findIndex() of student "Kiran"
const kiranIndex = students.findIndex(s => s.name === "Kiran");
console.log("Kiran Index:", kiranIndex);


// ASSIGNMENT 3: Employee Payroll Processor
// ----------------------------------------

// Test Data
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// 1. filter() employees from IT department
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

// Test Data
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// 1. filter() only "Sci-Fi" movies
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

// Test Data
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

// 1. filter() all credit transactions
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