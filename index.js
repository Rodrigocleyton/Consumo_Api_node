const express = require('express')
const app = express()
const port = 3000

const routes = require('./routes')

const bodyParser = require('body-parser')

const axios = require('axios')


//config 
//bodyparser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())












app.listen(port, ()=>{
    console.log("Servidor no ar na porta ", 3000)
})