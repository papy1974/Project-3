const router = require("express").Router();
const signUpController = require("../../controllers/signup");

// Matches with "/api/signup"
router.route("/")
  .post(signUpController.save);

module.exports = router;
