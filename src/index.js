const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

const fetch = require('node-fetch')
const request = require('request')

function fetchaa(url){
    const sis = fetch(url, {
        crossDomain:true,
        method: 'GET',
        headers: {'Content-Type':'application/json',
        'Access-Control-Allow-Origin': 'https://pokeapi.co' },
      }).then((response) => 
      {
          console.log(response)
          return(response)
      })
      .catch(console.error);
}
app.use(cors({
    origin: 'http://localhost:3001',
    credentials: true
}));
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
