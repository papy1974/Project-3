const db = require("../models");
const axios = require("axios");



module.exports = {

    // function to use API from backend
    searchApi: (req, res) => {

        axios.get("")
            .then((response) => res.json(response.data))
            .catch(err => res.status(422).json(err))

    },

    // find all products saved in db
    findAll: (req, res) => {
        db.Items
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findById: (req, res) => {
        db.Items
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    // used to save and create  an item  to the db
    save: (req, res) => {
        db.Book
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    update: (req, res) => {
        db.Items
            .findByIdAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    // used to delete an item  from the db
    remove: (req, res) => {
        db.Items
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

};

