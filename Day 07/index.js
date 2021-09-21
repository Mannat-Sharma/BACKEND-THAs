const express = require('express');
const app = express();

// POST -> CREATE
// GET -> READ
// PUT -> UPDATE
// DELETE -> DELETE

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
    console.log(req.query)
    res.send(req.params)
})
app.listen(5000);