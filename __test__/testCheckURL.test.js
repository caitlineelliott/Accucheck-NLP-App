const checkURL = require('../src/client/js/checkURL');

test('User input is a valid URL', () => {
    expect(checkURL).toBeDefined();
});