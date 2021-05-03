import { checkURL } from './checkURL.js'
import { sendData } from './sendData.js'

document.addEventListener('DOMContentLoaded', function () {
    const formBtn = document.querySelector('#submit-btn');
    formBtn.addEventListener('click', handleSubmit);
});

async function handleSubmit(event) {
    event.preventDefault();

    // hide description + display loading dial/back btn
    document.querySelector('.starter-form').classList.toggle('closed');
    document.querySelector('.form-loader').classList.toggle('display-on');
    document.querySelector('.back-btn').classList.toggle('display-on');

    // capture user URL input
    let userURL = document.getElementById('name').value;

    // validate URL
    const validURL = checkURL(userURL);

    // abort catch
    if (!validURL) {
        alert('please enter a correct URL');
        location.reload();
    } else if (validURL) {
        sendData('/passURL', { url: validURL });
    }
}

export { handleSubmit }