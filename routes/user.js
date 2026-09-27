const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveredirectUrl } = require("../middlewares.js");

router.get("/signup", (req, res)=>{
    res.render("users/signup.ejs");
});

router.post("/signup", wrapAsync(async (req, res)=>{
    try {
        let { username, email, password } = req.body;
        const newUser = new User({email, username});
        let registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err)=>{
            if(err){
                next(err);
            }
            req.flash("success","Welcome to WanderLust");
            res.redirect("/listings");
        })
    } catch(e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
}));

router.get("/login", (req,res)=>{
    res.render("users/login.ejs");
});

router.post("/login",saveredirectUrl, passport.authenticate('local', {failureRedirect: "/login", failureFlash: true}) , async (req, res)=>{
    req.flash("success", "You're logged in");
    let redirectUrl = res.locals.redirectUrl;
    if(!redirectUrl){
        return res.redirect("/listings");
    }
    res.redirect(res.locals.redirectUrl);
})

router.get("/logout", (req, res, next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","You are logged out.");
        res.redirect("/listings");
    });
});

module.exports = router;