const router = require("express").Router();
const donationsController = require("../../controllers/donation");

// Matches with "/api/donations"
router.route("/")
  .get(donationsController.findAll);

// Matches with "/api/books/:id"
/*router
  .route("/:id")
  .get(donationsController.findById)
  .put(donationsController.update)
  .delete(donationsController.remove);*/

module.exports = router;
