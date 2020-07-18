const router = require("express").Router();
const cartController = require("../../controllers/cart");

// Matches with "/api/cart"
router.route("/cart")
  .post(cartController.addToCart);

module.exports = router;
