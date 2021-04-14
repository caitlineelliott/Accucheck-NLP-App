import { checkURL } from './checkURL.js'

let formBtn = document.querySelector('#submit-btn');
formBtn.addEventListener('click', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    // capture user URL input
    let userURL = document.getElementById('name').value;
    console.log(userURL);

    checkURL(userURL);

    // checkForName(formText)

    // console.log("::: Form Submitted :::")
    // fetch('http://localhost:8080/test')
    //     .then(res => res.json())
    //     .then(function (res) {
    //         document.getElementById('results').innerHTML = res.message
    //     })
}

export { handleSubmit }