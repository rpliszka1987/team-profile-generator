const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

// List of employees
var employees = [];

const managerInput = [
    {
        type: 'input',
        name: 'name',
        message: "Enter Manager's name: "
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter id number: "
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter your email: "
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Enter office number"
    }
];

// start Manager information input
function startInput() {
    // Start questions for manager
    return inquirer.prompt(managerInput)
        .then(managerInfo => {
            // Creating a new manager
            var manager = new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber);
            // Add manager to the employee array
            employees.push(manager);
        
        });
};

startInput();