const express = require('express')
const router = express.Router();
const User = require('../models/user')
const flash=require('connect-flash')



router.get('/', (req,res) => {
    res.render('users/signup')
});


router.post('/', async(req,res) => {
    try{
    console.log("In the POST route in register user")
    console.log(req.body)
    const {email, username, password} = req.body;
    const user = new User({email,username});
    
    const registeredUser = await User.register(user,password);
    console.log(registeredUser)
    //req.flash('success', 'Welcome to Diary')
    res.redirect("comments");
    } catch(e) {
        console.log(e)
        res.redirect('register')
    }
})

module.exports = router;
