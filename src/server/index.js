projectData = {}

const dotenv = require('dotenv');
dotenv.config()

const apiKey = process.env.API_KEY;

var path = require('path')
const express = require('express')
const fetch = require('node-fetch')

const app = express()

app.use(express.static('dist'))

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Middleware
app.use(express.json());
app.use(express.urlencoded());

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

// receives data from client
app.post('/passURL', async function (req, res) {
    const userURL = req.body.data.url;

    const sentiment = await getSentiment(userURL, apiKey);
    const title = await getTitle(userURL, apiKey);

    projectData['title'] = title.title;
    projectData['url'] = userURL;
    projectData['scoreTag'] = sentiment.score_tag;
    projectData['agreement'] = sentiment.agreement;
    projectData['subjectivity'] = sentiment.subjectivity;
    projectData['confidence'] = sentiment.confidence;
    projectData['irony'] = sentiment.irony;

    console.log(projectData);
    res.send(projectData);
});

const getSentiment = async (url, apiKey) => {
    try {
        const request = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&lang=auto&url=${url}`);
        return await request.json();
    }
    catch (e) {
        console.log('Failed to fetch', e)
    }
}

const getTitle = async (url, apiKey) => {
    try {
        const request = await fetch(`https://api.meaningcloud.com/documentstructure-1.0?key=${apiKey}&lang=auto&url=${url}`)
        return await request.json();
    }
    catch (e) {
        console.log('Failed to fetch', e)
    }
}