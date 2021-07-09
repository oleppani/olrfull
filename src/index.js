
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

const fetch = require('node-fetch')



app.use(cors())
app.use(express.static('public'))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})


app.listen({ port: process.env.PORT || 3001})
