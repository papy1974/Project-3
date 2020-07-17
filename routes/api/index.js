const router = require("express").Router();

const donationsRoutes = require("./donations");
const loginRoutes = require("./login");
const signUpRoutes = require("./signup");

router.use("/donations", donationsRoutes);
router.use("/login", loginRoutes);
router.use("/signUp", signUpRoutes);

module.exports = router;
