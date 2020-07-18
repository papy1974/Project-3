const router = require("express").Router();
const donationsController = require("../../controllers/donation");

router.route("/")
  .get(donationsController.findAll);

  module.exports = router;
