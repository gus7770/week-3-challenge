// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {

  const employees = [];
  // TODO: Get user input to create and return an array of employee objects

  let proceed = true;
  while (proceed) {

    const firstName = prompt("What is the first name of the employee?");
    const lastName = prompt("What is the last name of the employee?");
    const salary = prompt("What is the salary of the employee?");

    console.log(`firstName: ${firstName}
    lastName: ${lastName}
    salary: ${salary}
    `);

    const newEmployee = {
      firstName, //firstName:firstName
      lastName,
      salary
    }

    employees.push(newEmployee);

    const isContinue = confirm("Do you want to continue click ok or cancel to quit?");
    if (!isContinue) {
      proceed = false;
    }
  }
  // when you click continue, it starts over and ask for new employee
  //when you cancel, it displays all the employees that you entered
  return employees;
}


// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  //total salary of all employees/length of employees array
  //after you get the avg using a for loop, then do console.log


    let totalSalary = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary = + parseFloat(employeesArray[i].salary);
  }

  const averageSalary = totalSalary / employeesArray.length;

  console.log(`The average salary is: ${averageSalary.toLocaleString("en-US", {

    style: "currency",
    currency: "USD"
  })}`);
}



// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  const randomIndex = Math.floor(Math.random() * employeesArray.length)
  console.log(randomIndex, "with floor")

  console.log(`Congratulations to ${employeesArray[randomIndex].firstName} ${employeesArray[randomIndex].lastName}, our random drawing winner!`);
}





/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
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
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
