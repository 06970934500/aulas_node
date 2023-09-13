const express = require('express')
const app = express()

const path = require('path')

const basePath = path.join(__dirname, 'templates')

app.get('/usuario/:id',at(req, res)=>{
    const id=req.params.id
    console.log(`Usuarios:${id}`)

    res.sendFile(`${basePath}/usuario.html`)
})

app.get('/', (req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})
app.listen(3000)