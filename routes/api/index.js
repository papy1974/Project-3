const router = require("express").Router();
const donationsRoutes = require("./donations");
const signUpRoutes = require("./signup");

// Book routes
router.use("/donations", donationsRoutes);
router.use("/signUp", signUpRoutes);

module.exports = router;
