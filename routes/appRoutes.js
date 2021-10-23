const express = require('express')
const router = express.Router()



//Login POST request
router.post('/', (req, res) => {
    const email = req.body.loginEmail
    const password = req.body.loginPassword

    console.log("Email", email, "Password:", password)//works
})


//SignUp POST request
router.post('/signup', (req, res) => {
    //name,phone,email,address,password,confirmPassword
    const { name, phone, email, address, password, confirmPassword } = req.body

    console.log("Name: ", name, "Email: ", email, "Address:", address, "Password:", password, "Confirm:", confirmPassword)
})


module.exports = router