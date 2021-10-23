const express = require('express')
const router = express.Router()



//Login POST request
router.post('/', (req, res) => {
    const email = req.body.loginEmail
    const password = req.body.loginPassword

    console.log("Email", email, "Password:", password)//works
})


module.exports = router