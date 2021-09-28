require('dotenv').config()
const express = require('express')
const cors = require('cors')
const routes = require('./routes/routes')

const app = express()


// ------- MIDDLEWARES -------
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 4000


// ------- ROUTES -------
app.use('/api/users', routes)


// ------- LAUNCH SERVER
app.listen(PORT, () => {
    console.log('Server running on port', PORT)
})