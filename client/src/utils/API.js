import axios from "axios";

export default {

  loginUser: function (email, password) {
    axios.post('/api/login', {
      email: email,
      password: password,
    })
        .then(function() {
          window.location.replace('/category');
        // If there's an error, log the error
        })
        .catch(function(err) {
          console.log(err);
        });
  },
  
  userSignup: function(userData) {
    return axios.post("/api/signup", userData);
  },
    // function to use API from backend
  searchApi: (req, res) => {

    // userSearch = `&search=children`

    axios.get("https://api.data.charitynavigator.org/v2/Organizations?app_id=f591e4ff&app_key=0d693d8ab79cff6b8e20b4a8c6896c0a&rated=true&search=children")
        .then((response) => res.json(response.data))
        .catch(err => res.status(422).json(err))

},
};