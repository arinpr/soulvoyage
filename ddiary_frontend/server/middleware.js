const Comment = require('./models/comment')

module.exports.isLoggedIn = (req,res, next) => {
    if (!req.isAuthenticated()) {
        console.log("You must be logged in")
        return res.redirect("/login");
    } else {
        next();
    }
}

module.exports.isAuthor = async(req, res, next) => {
    const { id } = req.params;
    const comment = await Comment.findById(id);
    if (!comment.author.equals(res.locals.currentUser._id)) {
        console.log("You must be logged in as the author")
        return res.redirect('/login');
    } else {
        next();
    }

}
