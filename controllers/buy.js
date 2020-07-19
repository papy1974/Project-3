// const db = require("../models");
// //const axios = require("axios");

// module.exports = {
//   // used to save and create  an item  to the db
//   save: async (req, res) => {
//     let data = await db.buy.findOne({
//       where: {
//         user_id: req.body.user_id,
//         item_model: req.body.item_model,
//       },
//       raw: true,
//     });
//     if (data) {
//       req.body.item_quantity = data.item_quantity + 1;
//       console.log("body", req.body);
//       db.items
//         .update(req.body, {
//           where: {
//             user_id: req.body.user_id,
//             item_model: req.body.item_model,
//           },
//         })
//         .then(function () {
//           console.log(res);
//           res.status(201).json({ message: "updated" });
//         })
//         .catch(function (err) {
//           res.status(401).json(err);
//         });
//     } else {
//       db.items
//         .create(req.body)
//         .then(function () {
//           // res.redirect(307, '/api/login');
//           console.log(res);
//           res.status(201).json({ message: "added" });
//         })
//         .catch(function (err) {
//           res.status(401).json(err);
//         });
//     }
//   },
//   get: (req, res) => {
//     db.buy
//       .findAll({
//         where: {
//           user_id: req.query.user_id,
//         },
//         include: [
//           {
//             model: db.items,
//             required: true,
//           },
//         ],
//         raw: true,
//       })
//       .then((resp) => {
//         console.log("resp", resp);
//         res.json(resp);
//       })
//       .catch((err) => {
//         console.log(err);
//         res.json([]);
//       });
//   },
// };
