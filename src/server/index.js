const express = require('express')
const app = express()
var cors = require('cors')

app.use(express.json())
app.use(cors())

const movieRouts = require('./movieRouts')
app.use('/api', movieRouts)


app.listen(3001, () => console.log('Server Started'))