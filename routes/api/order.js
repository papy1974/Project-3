const router = require("express").Router();
const orderController = require("../../controllers/order");

// Matches with "/api/order"
router.route("/order")
  .post(orderController.postOrder);

module.exports = router;
