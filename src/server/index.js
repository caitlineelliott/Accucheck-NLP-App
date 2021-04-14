projectData = {}

var path = require('path')
const express = require('express')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

// receives data from client
app.post('/passURL', async function (req, res) {
    // const userURL = req.body;

    // const sentiment = await getSentiment(userURL.data, apiKey);

    // projectData['url'] = userURL.data;
    // projectData['scoreTag'] = sentiment.score_tag;
    // projectData['agreement'] = sentiment.agreement;
    // projectData['subjectivity'] = sentiment.subjectivity;
    // projectData['confidence'] = sentiment.confidence;
    // projectData['irony'] = sentiment.irony;


    console.log(projectData);
    // res.send(projectData);
});