var express = require("express");
var router = express.Router();
var passport = require("passport");
var user = require("../models/user");

router.get("/", function(req, res){
    res.render("landing");
});

router.get("/register", function(req, res){
    res.render("register");
});

router.post("/register", function(req, res){
    var newUser = new user({username: req.body.username});
    user.register(newUser, req.body.password, function(err, user){
        if(err){
            req.flash("error", "hello there");
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Welcome To The Albanian Camping " + user.username);
            res.redirect("/campgrounds");
        });
    });
});

router.get("/login", function(req, res){
    //req.flash("error", "Please Login First!");
    res.render("login");
});

router.post("/login", passport.authenticate("local",
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }), function(req, res){
});

router.get("/logout", function(req, res){
    req.logOut();
    req.flash("success", "Successfully Logged You Out!");
    res.redirect("/campgrounds", );
});

module.exports = router;