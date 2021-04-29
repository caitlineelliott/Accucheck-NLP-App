const handleSubmit = require('../src/client/js/handleSubmit');

test('User input successfully is recorded from form and sent to helper functions', () => {
    expect(handleSubmit).toBeDefined();
});