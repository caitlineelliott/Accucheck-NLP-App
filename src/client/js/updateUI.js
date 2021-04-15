function updateUI(data) {
    console.log(data.url);

    // show results
    document.querySelector('.form-results').classList.add('display-on');
    document.querySelector('.form-loader').classList.toggle('display-on');

    // add data to results table
    let authorTitle = data.title;
    let array = authorTitle.split(' - ', 2);

    document.querySelector('#results-intro').innerHTML = `Your article, "${array[0]}", from ${array[1]} returned the following results:`;

    document.querySelector('#score-tag').innerHTML = data.scoreTag;
    document.querySelector('#agreement').innerHTML = data.agreement;
    document.querySelector('#subjectivity').innerHTML = data.subjectivity;
    document.querySelector('#irony').innerHTML = data.irony;
}

export { updateUI }