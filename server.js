const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')
const passport = require('passport')
const helmet = require('helmet')

const app = express()

//port declaration
const PORT = process.env.PORT || 5000

//routes import
const routes = require("./routes/appRoutes")

//Helmet's default security settings
app.use(helmet())

//Passport Config

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


//Database Config
const db = require("./config/keys").MongoURI
mongoose.connect(db)
.then(() => {
    console.log('MongoDB connected...')
})
.catch(err => {
    console.log(err)
})

//Routes Config
app.use('/', routes)

app.listen(PORT, () =>{
    console.log("server running on PORT: " + PORT)
})
