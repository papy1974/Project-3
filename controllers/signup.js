const db = require("../models");

module.exports = {
  save: (req, res) => {
    db.login
      .create(req.body)
      .then(function () {
        res.status(201).end();
      })
      .catch(function (err) {
        res.status(500).json(err);
      });
  }
}