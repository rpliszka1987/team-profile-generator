const Intern = require('../lib/Intern.js');

// Test for intern school
test('intern school', () => {
    const intern = new Intern('Rob', 23, 'rob@test.com','School');

    expect(intern.school).toEqual(expect.any(String));
});

// Test for getSchool()
test('get school name', ()=> {
    const intern = new Intern('Rob', 23, 'rob@test.com','School');

    expect(intern.getSchool().toEqual(expect.any(String)));
});

// Test getRole()
test('get intern role', () => {
    const intern = new Intern('Rob', 23, 'rob@test.com','School');

    expect(intern.getRole().toBe('Intern'));
});