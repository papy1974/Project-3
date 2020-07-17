import axios from "axios";

export default {
  loginUser: function (loginObject) {
    return axios.post('/api/login', {
      email: loginObject.email,
      password: loginObject.password,
    });
  },

  userSignup: function (userData) {
    return axios.post("/api/signup", userData);
  },

  // function to use API from backend
  searchApi: (req, res) => {
    let userSearch = req.body;
    let url = `https://api.data.charitynavigator.org/v2/Organizations?app_id=f591e4ff&app_key=0d693d8ab79cff6b8e20b4a8c6896c0a&rated=true&&pageSize=20&search=`

    return axios.get(url + userSearch);
  },
};
