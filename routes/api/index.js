const router = require("express").Router();
const donationsRoutes = require("./donations");
const signUpRoutes = require("./signup");
const passport = require("../../config/passport");

// Book routes
router.use("/donations", donationsRoutes);
router.use("/signUp", signUpRoutes);

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

module.exports = router;
