const express = require('express');
const https = require('node:https');
const apicache = require('apicache');

const app = express()

require('dotenv').config()

let cache = apicache.middleware
app.use("/git", cache("5 minutes")) // Add 5-minute caching to Git API call.

app.get("/git", (req, res) => {
    https_request = https.get({
        hostname: 'api.github.com',
        path: '/users/benkelcher77/repos',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36'
        },
        OAUth: process.env.GIT_OAUTH
    }, (https_response) => {
        https_response.pipe(res)
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send("Something went wrong!");
    });
});

app.get("/api", (req, res) => {
    res.json({ "users": ["user1", "user2", "user3"] });
});

app.listen(5000, () => { console.log("Server started on port 5000"); });
