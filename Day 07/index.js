const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status[200].send("Hello there👋")
    // res.send == return
})

app.get('/user', (req, res) => {
    // req.query = {
    //     "id": "2",
    //     "username": "xyz"
    // }
    res.send(req.query)
})

app.get('/user/:username/userId/:id', (req, res) => {
    res.send(req.params)
})

app.get('/ab(cd)?e', function (req, res) {
    res.send('ab(cd)?e or abe')
})

app.get('/ab*cd', function (req, res) {
    // ab*cd = ab..cd
    res.send('ab*cd')
})

app.get('/ab+cd', function (req, res) {
    // ab+cd = abbbbbbcd
    res.send('ab*cd')
})

app.listen(5000);