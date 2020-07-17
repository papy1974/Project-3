const router = require("express").Router();
const donationsRoutes = require("./donations");
const signUpRoutes = require("./signup");
const itemsRoutes = require("./items");
const buyRoutes = require("./buy")

// API routes
router.use("/donations", donationsRoutes);
router.use("/signUp", signUpRoutes);
router.use("/items", itemsRoutes);
router.use("/buy", buyRoutes);

module.exports = router;
