const Manager = require('../lib/Manager.js');

test('get employee office number', ()=> {
    const manager = new Manager('Rob', 23, 'rob@email.com');

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('get employee manager role', () => {
    const manager = new Manager('Rob', 23, 'rob@email.com');

    expect(manager.getRole().toBe('Manager'));
});
