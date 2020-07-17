const router = require("express").Router();
const donationsRoutes = require("./donations");
const signUpRoutes = require("./signup");
const itemsRoutes = require("./items");

// API routes
router.use("/donations", donationsRoutes);
router.use("/signUp", signUpRoutes);
router.use("/items", itemsRoutes);

module.exports = router;
