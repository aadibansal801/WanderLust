const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const userController = require("../controllers/users.js");
const passport = require("passport");

router
  .route("/signup")
  .get(userController.renderSignUpForm)
  .post(userController.createUser);

router
  .route("/login")
  .get(userController.renderLoginForm)
  .post(userController.loginUser);

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  }),
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/listings",
  }),
  (req, res) => {
    req.flash("success", "You're logged in with Google!");
    res.redirect("/listings");
  },
);

router.get("/logout", userController.logoutUser);

module.exports = router;
