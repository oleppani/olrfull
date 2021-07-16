const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

const request = require('request')

app.use(cors())
app.use(express.static('public'))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})

app.post('/api', async (req, res) => {
    
    console.log('nyt')
    console.log(req.headers.url)
    
      await request({
        method: 'GET',
        uri: req.headers.url,
        headers: {}
      }, function (error, response, body){
        if(!error && response.statusCode === 200){
            console.log(body)
          res.json(body);
        }
      })
    
      
})


app.listen({ port: process.env.PORT || 3001})
