require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const chalk = require('chalk')
const app = express()
const cors = require('cors')
const port = process.env.PORT
const userRouter = require('./routes/UserRoute')

const https = require(`https`)
const fileUpload = require('express-fileupload')
const { readFileSync } = require(`fs`)

require('./database/connection')



app.get('/', (req, res) => {
    res.json({ message: 'ok' })
})

app.use('/users', userRouter)


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    console.error(err.message, err.stack)
    res.status(statusCode).json({ message: err.message })

    return
})

app.listen(port, '0.0.0.0', () => {
    console.log(
        chalk.green(`E-Rapat app listening at http://localhost:${port}`)
    )
})
