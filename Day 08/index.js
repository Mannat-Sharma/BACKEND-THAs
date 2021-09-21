const express = require('express');
const app = express();

const isValid = (req, res, next) => {
    if (req.query.auth === 'true'){
        next()
    }
    else{
        res.status(400).send('Unauthorised')
    }
}

app.use(isValid);

const sendRes = (req, res) => {
    res.status(200)
    res.json(req.query)
}

app.get('/', sendRes )

app.listen(5000);