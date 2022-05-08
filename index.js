const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const createHTML = require('./src/js/app.js');

// List of employees
var employees = [];

// Manager
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

// Engineer
const engineerInput = [
    {
        type: 'input',
        name: 'name',
        message: "Enter Engineer name: "
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter id number: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email: '
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter GitHub username: '
    }
];

// Intern
const internInput = [
    {
        type: 'input',
        name: 'name',
        message: "Enter Intern name: "
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter id number: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email: '
    },
    {
        type: 'input',
        name: 'school',
        message: 'Enter School name: '
    }
];

// Choices Menu
const menuOption = [
    {
        type: 'list',
        name: 'option',
        message: 'Would you like to add more employees?',
        choices: ['Engineer', 'Intern', 'Finish']
    }
];


// start Manager information input
function startInput() {
    // Start questions for manager
    return inquirer.prompt(managerInput)
        .then(managerInfo => {
            // Creating a new manager
            const manager = new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber);
            // Add manager to the employee array
            employees.push(manager);
            employeeMenu();
        
        });
};

// start Engineer Information input
function engineerStart() {
    return inquirer.prompt(engineerInput)
        .then(engineerInfo => {
            // Create a new Engineer
            const engineer = new Engineer(engineerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.github);
            // add engineer to employee array
            employees.push(engineer);
            employeeMenu();
        })
};

// start Intern Information input
function internStart() {
    return inquirer.prompt(internInput)
        .then(internInfo => {
            const intern = new Intern(internInfo.name, internInfo.id, internInfo.email, internInfo.school);
            employees.push(intern)
            employeeMenu()
        })
};

// employee add choice menu
function employeeMenu() {
    return inquirer.prompt(menuOption)
        .then(option => {
            if (option.option === 'Engineer') {
                engineerStart();
            } else if ( option.option === 'Intern') {
                internStart();
            } else {
                createHTML(employees);
            }
        })
};

startInput();



