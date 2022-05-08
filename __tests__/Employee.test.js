const Employee = require('../lib/Employee.js');

// Test for creating an employee
test('creates an Employee object', () => {
    const employee = new Employee('Rob', 23, "rob@email.com");

    expect(employee.name).toBe('Rob');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// Test getName()
test('get employee name', () =>{
    const employee = new Employee('Rob', 23, 'rob@email.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// Tests getId()
test('get employee id', () => {
    const employee = new Employee('Rob', 23, 'rob@email.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// Tests getEmail()
test('get employee email', () => {
    const employee = new Employee('Rob', 23, 'rob@email.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

// Tests getRole()
test('get employee role', () => {
    const employee = new Employee('Rob', 23, 'rob@email.com');

    expect(employee.getRole()).toEqual('Employee');
});