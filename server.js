import express from 'express'
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')
const passport = require('passport')
const helmet = require('helmet')

const app = express()

//port declaration
const PORT = process.env.PORT || 5000

//Helmet's default security settings
app.use(helmet())

//Passport Config

app.use(cors())
app.use(express.json())


//Database Config


app.listen(PORT, () =>{
    console.log("server running on PORT: " + PORT)
})
