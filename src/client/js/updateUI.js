function updateUI(data) {
    console.log(data.url);

    // show results
    // document.querySelector('.form-results').classList.add('display-on');

    // add data to results table
    document.querySelector('#results').innerHTML = data.scoreTag;
    // document.querySelector('#score-tag').innerHTML = data.scoreTag;
    // document.querySelector('#agreement').innerHTML = data.agreement;
    // document.querySelector('#subjectivity').innerHTML = data.subjectivity;
    // document.querySelector('#confidence').innerHTML = data.confidence;
    // document.querySelector('#irony').innerHTML = data.irony;
}

export { updateUI }