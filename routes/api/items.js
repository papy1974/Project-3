const router = require("express").Router();
const itemsController = require("../../controllers/items");

// Matches with "/api/donations"
router.route("/").post(itemsController.save);

// router.route("/")
//   .get(itemsController.findAll);

// Matches with "/api/books/:id"
/*router
  .route("/:id")
  .get(donationsController.findById)
  .put(donationsController.update)
  .delete(donationsController.remove);*/
router.route("/").get(itemsController.get);
module.exports = router;
