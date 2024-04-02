// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
let employeesArray = [];


// Collect employee data
let collectEmployees = function() {

  let addEmployee = true;

while(addEmployee) {
  let employee = {};
    employee.firstName = prompt('Employee first name:');
    employee.lastName = prompt('Employee last name:');
    employee.salary = parseInt(prompt('Enter employee salary:'),10);
    employeesArray.push(employee);
    addEmployee=confirm('Would you like to add another employee?');
};

displayEmployees();

}

// Display the average salary
const displayAverageSalary = function() {
  let ttlSalary = 0
    for( let i=0; i < employeesArray.length; i++) {
      const obj = employeesArray[i]
        console.log(obj.salary)
        ttlSalary += obj.salary
  }

  const avgSalary = ttlSalary / employeesArray.length
    console.log(`Our average employee salary is ${avgSalary}`)

}

// Select a random employee
const getRandomEmployee = function() {
    const rndmEmp = employeesArray[Math.floor(Math.random() * employeesArray.length)];
      console.log(`Congratulations to our random sweepstakes winner, ${rndmEmp.firstName}${rndmEmp.lastName}!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function() {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  collectEmployees();  // populates the global array

  console.table(employeesArray);

  displayAverageSalary();

  console.log('==============================');

  getRandomEmployee();

  employeesArray.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
