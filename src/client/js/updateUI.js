function updateUI(data) {
    console.log(data.url);

    // show results
    document.querySelector('.form-results').classList.add('display-on');
    document.querySelector('.form-loader').classList.toggle('display-on');

    // add data to results table
    let authorTitle = data.title;
    let array = authorTitle.split(' - ', 2);
    let title = array[0];
    let outlet = array[1].italics();

    document.querySelector('#title').innerHTML = title;
    document.querySelector('#outlet').innerHTML = outlet;

    document.querySelector('#score-tag').innerHTML = data.scoreTag;
    document.querySelector('#agreement').innerHTML = data.agreement;
    document.querySelector('#subjectivity').innerHTML = data.subjectivity;
    document.querySelector('#irony').innerHTML = data.irony;
}

export { updateUI }