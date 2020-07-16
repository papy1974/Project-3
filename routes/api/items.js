const router = require("express").Router();
const itemsController = require("../../controllers/items");

// Matches with "/api/donations"
router.route("/")
  .post(itemsController.save);

// Matches with "/api/books/:id"
/*router
  .route("/:id")
  .get(donationsController.findById)
  .put(donationsController.update)
  .delete(donationsController.remove);*/

module.exports = router;
