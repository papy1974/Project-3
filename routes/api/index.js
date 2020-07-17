const router = require("express").Router();
const donationsRoutes = require("./donations");
const signUpRoutes = require("./signup");
const itemsRoutes = require("./items");
const cartRoutes = require("./cart")

// API routes
router.use("/donations", donationsRoutes);
router.use("/signUp", signUpRoutes);
router.use("/items", itemsRoutes);
router.use("/cart", cartRoutes);


module.exports = router;
