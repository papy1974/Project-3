const router = require("express").Router();

const donationsRoutes = require("./donations");
const loginRoutes = require("./login");
const signUpRoutes = require("./signup");
const itemsRoutes = require("./items");

router.use("/donations", donationsRoutes);
router.use("/login", loginRoutes);
router.use("/signUp", signUpRoutes);
router.use("/items", itemsRoutes);

module.exports = router;
