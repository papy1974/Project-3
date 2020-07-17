import axios from "axios";

export default {
  loginUser: function (email, password) {
    axios
      .post("/api/login", {
        email: email,
        password: password,
      })
      .then(function () {
        window.location.replace("/category");
        // If there's an error, log the error
      })
      .catch(function (err) {
        console.log(err);
      });
  },

  userSignup: function (userData) {
    return axios.post("/api/signup", userData);
  },

  addSellItem: function (itemData) {
    return axios.post("/api/items", itemData);
  },

  // function to use API from backend
  searchApi: (req, res) => {
    let userSearch = req.body;
    let url = `https://api.data.charitynavigator.org/v2/Organizations?app_id=f591e4ff&app_key=0d693d8ab79cff6b8e20b4a8c6896c0a&rated=true&&pageSize=20&search=`;

    return axios.get(url + userSearch);
  },
  buyApi: (req, res) => {
    return axios.get("/api/items");
  },
  addToCart(data) {
    return axios.post("/api/buy", data);
  },
  getCart(user_id) {
    return axios.get("/api/buy?user_id=" + user_id);
  },
};
