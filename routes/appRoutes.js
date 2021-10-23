const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')

//Load User model
const User = require('../models/User')

//Login POST request
router.post('/', (req, res) => {
    const email = req.body.loginEmail
    const password = req.body.loginPassword

    console.log("Email", email, "Password:", password)//works
})


//SignUp POST request
router.post('/signup', (req, res) => {
    //sign up parameters from frontend
    const { name, phone, email, address, password, confirmPassword } = req.body

    console.log("Name: ", name, "Email: ", email, "Address:", address, "Password:", password, "Confirm:", confirmPassword)

    User.findOne({ email })
    .then(user => {
        if(user){
            return res.status(400).json({ msg: 'Email already exists in database.'})
        }

        const newUser = new User({
            name, phone, address, email, password
        })

        //Hash password
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) =>{
                if(err) throw err
                newUser.password = hash
                newUser.save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err))
            })
        })
    })

})


module.exports = router