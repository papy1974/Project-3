const db = require("../models");
const axios = require("axios");



module.exports = {

    // function to use API from backend
    searchApi: (req, res, search) => {

        userSearch = `&search=${search}`

        axios.get("https://api.data.charitynavigator.org/v2/Organizations?app_id=f591e4ff&app_key=0d693d8ab79cff6b8e20b4a8c6896c0a&rated=true" + userSearch)
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
        db.Items
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

