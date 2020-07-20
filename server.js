const db = require("./models");
const routes = require("./routes");
const express = require("express");
const session = require("express-session");
const passport = require("./config/passport.js");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

const app = express();

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static content for the app from the "public" directory in the application directory.
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
  });
});
