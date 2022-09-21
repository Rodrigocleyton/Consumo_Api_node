const express = require('express')
const routes = express()


routes.get('/filmes', (req, res)=>{
    res.statusCode(200)
})

routes.get('/filme/:id', (req, res)=>{

})

routes.post('/filme/:id', (req, res)=>{
    
})