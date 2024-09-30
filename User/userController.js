const express = require('express');
const { userDataValidation } = require('./userValidator');
const { validationResult } = require('express-validator')
const router = express.Router();
const User = require('./userSchema');


router.post('/register', userDataValidation, async (req, res) => {

    try {
        const { name, address } = req.body;

        if (!name || !address) {
            return res.status(401).json({ message: "enter required fields", success: false })
        }
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ message: errors.array()[0].msg, success: false })

        }
        const users = await User.find();
        let chk = false;
        for (let i = 0; i < users.length; i++) {
            if (users[i].name === name && users[i].address == address) {
                chk = true;
                break;
            }
        }
        if (chk) {
            return res.status(422).json({ message: "same name with same address user already exist", success: false })
        }

        const user = await User.create({
            name,
            address

        })
        return res.status(200).json({ user: user, success: true });

    } catch (error) {
        return res.status(500).json({ message: error.message, success: false });

    }
})


router.get('/getalluser', async (req, res) => {

    try {

        const users = await User.find();
        return res.status(200).json({ users: users, success: true });

    } catch (error) {
        return res.status(500).json({ message: error.message, success: true });

    }
})

module.exports = router