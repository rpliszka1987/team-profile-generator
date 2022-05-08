const Manager = require('../lib/Manager.js');

// Tests for manager office number
test('get employee office number', ()=> {
    const manager = new Manager('Rob', 23, 'rob@email.com', 12);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Tests for Manager role to be displayed
test('get employee manager role', () => {
    const manager = new Manager('Rob', 23, 'rob@email.com', 12);

    expect(manager.getRole()).toBe('Manager');
});
