import { checkURL } from './checkURL.js'
import { sendData } from './sendData.js'
import Favicon from '../imgs/favicon.png'
import AnalysisImg from '../imgs/analysis.svg'

const faviconImg = document.querySelector('#favicon-img');
const analysisImg = document.querySelector('#analysis-img');

faviconImg.href = Favicon;
analysisImg.src = AnalysisImg;

let formBtn = document.querySelector('#submit-btn');
formBtn.addEventListener('click', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();

    // hide description + display loading dial
    const formDescription = document.querySelector('.description');
    formDescription.classList.toggle('closed');

    // capture user URL input
    let userURL = document.getElementById('name').value;

    // validate URL
    const validURL = checkURL(userURL);

    // send valid URL to server + analyze with MeaningCloud
    await sendData('/passURL', { url: validURL });
}

export { handleSubmit }