const db = require("../models");
//const axios = require("axios");

module.exports = {

    
    // used to save and create  an item  to the db
    save: (req, res) => {
        db.items
            .create(req.body)
            .then(function() {
                // res.redirect(307, '/api/login');
                console.log(res);
              })
              .catch(function(err) {
                res.status(401).json(err);
              });
    }
}