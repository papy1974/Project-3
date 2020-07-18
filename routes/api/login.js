const passport = require("../../config/passport");
const router = require("express").Router();

router.post('/', passport.authenticate('local'), function(req, res) {
  res.json(req.user);
});

/*module.exports = function (app) {
  app.post('/api/login', passport.authenticate("local"), (req, res) => {
    res.json(req.user);
  });

  // Route for logging out
  app.get('/api/user_data', function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id,
      });
    }
  });

  //START ALL user RELATED CALLS
  // **************************************
  app.get('/api/api-login', (req, res) => {
    db.user.findAll({
      where: {
        user_id: req.user.id,
      },
      include: [db.Login],
    }).then((data) => {
      res.json(data);
    });
  });


  app.delete('/api/api-login/:id', function (req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.user.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function (data) {
      res.json(data);
    });
  });
};*/

module.exports = router;
