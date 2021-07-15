const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

const fetch = require('node-fetch')


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
app.use(cors())
app.use(express.static('public'))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})
app.post('*', async (req, res) => {
      //tähän argumentin url lukeminen ja fetch annetusta urlista
    //console.log('testiii')
    //fetchaa('https://pokeapi.co/api/v2/pokemon').then((response) => 
    //{
      //  console.log(response)
        //return(response)
    //})
    console.log('fetchii')
    let re = await fetch('https://pokeapi.co/api/v2/pokemon')
    console.log(re.text())
    //.then((response) => 
    /*{
        console.log(response)
        return(response)
    })
    .catch(console.error);
    */
   return re
    //palautetaan fetchin tulos
    //console.log(fe)
    //return(fe)
})



app.listen({ port: process.env.PORT || 3001})
