const express = require('express')
const router = express.Router();
const User = require('../models/user')
const flash=require('connect-flash')
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');



router.use(session({ secret: 'AQG9aPG2!' }))
router.use(passport.initialize());
router.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


router.get('/', (req,res) => {
    res.render('users/login')
});

router.post('/', passport.authenticate('local', {failureFlash: true, failureRedirect: '/login'}), async(req,res) => {
    console.log("Welcome Back")
    res.redirect('comments');
})

module.exports = router;