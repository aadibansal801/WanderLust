const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveredirectUrl } = require("../middlewares.js");
const userController = require("../controllers/users.js");

router
  .route("/signup")
  .get(userController.renderSignUpForm)
  .post(wrapAsync(userController.createUser));

router
  .route("/login")
  .get(userController.renderLoginForm)
  .post(
    saveredirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userController.loginUser,
  );

router.get("/logout", userController.logoutUser);

module.exports = router;
