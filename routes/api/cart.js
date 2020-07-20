const router = require("express").Router();
const cartController = require("../../controllers/cart");

// Matches with "/api/cart"
router.route("/")
  .post(cartController.addToCart);

router.route("/")
  .get(cartController.displayCartItems);

module.exports = router;
