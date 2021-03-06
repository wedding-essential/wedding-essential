require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
// const favicon      = require('serve-favicon');
// const hbs          = require('hbs');
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

mongoose
  .set("useUnifiedTopology", true)
  .connect(process.env.MONGODB_URI || "mongodb://localhost/wedding-essential", {
    useNewUrlParser: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

const session = require("express-session");
const passport = require("passport");
require("./configs/passport");

const MongoStore = require("connect-mongo")(session);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

/*
app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
*/
app.use(express.static(path.join(__dirname, "/client/build")));

// default value for title local
app.locals.title = "Express - Generated with IronGenerator";

app.use("/api/auth", require("./routes/auth/auth.js"));

// app.use('/api/wedding', require('./routes/wedding/gift.js'))
// app.use('/api/wedding', require('./routes/wedding/post.js'))
app.use("/api/wedding", require("./routes/wedding/user.js"));
app.use("/api/wedding", require("./routes/wedding/wedding.js"));

//Cloudinary
app.use("/api", require("./routes/file-upload-routes"));
app.use("/api", require("./routes/wedding/picture"));

app.use((req, res) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/client/build/index.html");
});

module.exports = app;
