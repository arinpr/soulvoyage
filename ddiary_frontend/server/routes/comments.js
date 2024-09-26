const express = require('express')
const router = express.Router();
const flash=require('connect-flash')
const passport = require('passport');
const User = require('../models/user')
const LocalStrategy = require('passport-local');
const session = require('express-session');
const {isLoggedIn, isAuthor} = require('../middleware')

//this creates the schema for the comments
const Comment = require('../models/comment')

router.use(session({ secret: 'notagoodsecret' }))
router.use(passport.initialize());
router.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



router.get('/', isLoggedIn, async (req,res) => {
    //const { comment } = req.query;
    console.log("in comments route")
    console.log(res.locals.currentUser._id);
    const comments = await Comment.find({author:res.locals.currentUser._id}).populate('author');
    res.render('comments/index', {comments});
})

//to add new comment. This is create in CRUD
router.get('/new', (req,res) => {
    res.render('comments/new');
})


// to create a new comment 
router.post('/', async (req,res) => {
    //console.log("in newComments")
    //console.log(req.body);
    const newComment = new Comment(req.body);
    newComment.author = res.locals.currentUser._id;
    //console.log(newComment);
    await newComment.save();
    //comments.push({username,comment,id:uuidv4()});
    //res.send("It Worked");
    res.redirect('/comments');
})

//to show a particular comment. This is R in CRUD
router.get('/:id', isLoggedIn, isAuthor, async (req,res) => {
    const { id } = req.params;
    //console.log(id)
    const comment = await Comment.findById(id).populate('author');
    console.log(comment);
    console.log(res.locals.currentUser._id)
    console.log(comment.author._id);
    res.render('comments/showcomment',{comment,id})
})


// to update the comment. This is U in CRUD

router.get('/:id/edit', async (req, res) => {
    const { id } = req.params;
    const comment = await Comment.findById(id);
    console.log(comment.comment)
    res.render('comments/update', { comment })
})


router.patch('/:id', async (req,res) => {
    const { id } = req.params;
    //console.log(id)
    const foundComment = await Comment.findByIdAndUpdate(id, req.body, {runValidators: true, new: true});
    res.redirect(`/comments/${foundComment._id}`)

})



// to delete the comment, This is D in CRUD
router.delete('/:id', async (req,res) => {
    const {id} = req.params;
    const deletedComments = await Comment.findByIdAndDelete(id);
    res.redirect('/comments');
})

module.exports = router;