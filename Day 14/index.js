const express = require('express')
const app = express()
const sequelize = require('./database')
const userRoutes = require('./routes/user')
const adminRoutes = require('./routes/admin')
const isAdmin = require('./middlewares/isAdmin')
const isAuth = require('./middlewares/isAuth')

app.use(express.json())

app.use('/admin', isAuth, isAdmin, adminRoutes)
app.use('/user', userRoutes)

sequelize.sync()
    .then(()=> {
        console.log("SERVER CONNECTED");
        app.listen(5000)
    })
    .catch((err) => {
        console.log(err);
    })
