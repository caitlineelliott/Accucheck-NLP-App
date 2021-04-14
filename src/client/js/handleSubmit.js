import { checkURL } from './checkURL.js'
import { sendData } from './sendData.js'

let formBtn = document.querySelector('#submit-btn');
formBtn.addEventListener('click', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();

    // capture user URL input
    let userURL = document.getElementById('name').value;

    // validate URL
    const validURL = checkURL(userURL);

    // send valid URL to server + analyze with MeaningCloud
    await sendData('/passURL', validURL);
}

export { handleSubmit }