const express = require('express')
const datas = require('./Route/data')
const mongoose = require('mongoose')
const dataModel = require('./Model/data-model')
const cors = require('cors')

const app = express()

app.use(cors(
    {
    origin: [""],
    methods: ["POST","GET"],
    credentials:true
    }
))

mongoose.connect('mongodb://127.0.0.1:27017/ProductDirectory')

mongoose.connection.on('connected', ()=>{
    console.log('MongoDB successfully connectd')
})

app.use('/datas',datas)

app.get('/', (req, res)=>{
    res.json("Hello");
})

app.listen(7001, ()=>{
    console.log('sever is running on port 7001')
})
