const Engineer = require('../lib/Engineer.js');

// Tests for Engineer github username
test('check for github username', ()=> {
    const engineer = new Engineer('rpliszka1987');

    expect(engineer.github).toEqual(expect.any(String));
});

// Test for getGitHub()
test('get github account link', () => {
    const engineer = new Engineer('rpliszka1987');

    expect(engineer.getGithub().toEqual(expect.any(String)));
});

// Test for Engineer role
test('get Engineer role', () => {
    const engineer = new Engineer('rpliszka1987');

    expect(engineer.getRole().toBe('Engineer'));
});