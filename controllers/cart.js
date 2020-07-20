const db = require("../models");
//const axios = require("axios");

module.exports = {

    // used to save and create  an item  to the db
    addToCart: (req, res) => {
        db.cart
            .create(req.body)
            .then(function() {
                // res.redirect(307, '/api/login');
                console.log(res);
              })
              .catch(function(err) {
                res.status(401).json(err);
              });
    },

    displayCartItems: (req, res) => {
      db.cart
          .findAll({
            raw: true,
          })
          .then(r => {
            console.log(r);
            res.json(r);
          })
          .catch( err => {
            res.status(401).json(err);
          });
    }
}