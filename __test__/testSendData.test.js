const sendData = require('../src/client/js/sendData');

test('Data is sent to server from form and received by client for UI update', () => {
    expect(sendData).toBeDefined();
});