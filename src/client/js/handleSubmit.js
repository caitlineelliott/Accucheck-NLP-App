import { checkURL } from './checkURL.js'
import { sendData } from './sendData.js'
import Favicon from '../imgs/favicon.png'
import AnalysisImg from '../imgs/analysis.svg'

// load in images
const faviconImg = document.querySelector('#favicon-img');
const analysisImg = document.querySelector('#analysis-img');
faviconImg.href = Favicon;
analysisImg.src = AnalysisImg;

// handle submit
let formBtn = document.querySelector('#submit-btn');
formBtn.addEventListener('click', handleSubmit);

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

    // send valid URL to server + analyze with MeaningCloud
    await sendData('/passURL', { url: validURL });
}

export { handleSubmit }

// variables for mobile nav
const hamIcon = document.querySelector('.hamburger-icon');
const closeBtn = document.querySelector('.close-btn');

/**
 * @description toggles mobile nav active & resting states
 */

const restingNav = () => {
    hamIcon.classList.remove('hamburger-none');
    document.querySelector('nav').classList.add('nav');
    document.querySelector('nav').classList.remove('mobile-nav');
    closeBtn.classList.remove('close-btn-active');
    document.querySelector('.nav-list').innerHTML = '';
};

const activeNav = () => {
    hamIcon.classList.add('hamburger-none');

    const navItems = document.getElementsByClassName('nav-links');
    document.querySelector('.nav-list').innerHTML =
        `${navItems[0].outerHTML}<br>
        ${navItems[1].outerHTML}<br>
        ${navItems[2].outerHTML}<br>
        ${navItems[3].outerHTML}<br>`;

    document.querySelector('nav').classList.add('mobile-nav');
    document.querySelector('nav').classList.remove('nav');
    closeBtn.classList.add('close-btn-active');
    closeBtn.addEventListener('click', restingNav);
    document.querySelector('.nav-list').addEventListener('click', restingNav);
};

hamIcon.addEventListener('click', activeNav);

export { restingNav }
export { activeNav }