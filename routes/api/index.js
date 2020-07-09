const router = require("express").Router();
const donationsRoutes = require("./donations");

// Book routes
router.use("/donations", donationsRoutes);

module.exports = router;
