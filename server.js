
var express = require('express');
var app = express();
var passport   = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session    = require('express-session');
var bodyParser = require('body-parser');
var env = require('dotenv').load();
var exphbs = require('express-handlebars');
var path = require('path');




//For Handlebars
app.engine('hbs', exphbs({
		defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

//For BodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public')));

// For Passport

app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret

app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions


//Routes
var authRoute = require('./routes/auth.js')(app);

app.get('/', function(req, res) {

    res.render('index');

});

//Models
var models = require("./models");

//Sync Database
models.sequelize.sync().then(function() {

    console.log('Nice! Database looks fine')

}).catch(function(err) {

    console.log(err, "Something went wrong with the Database Update!")

});

passport.use(new LocalStrategy(
  function(username, password, done) {
    models.User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

app.post('/signin',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}));


app.listen(8080, function(err) {

    if (!err)
        console.log("Site is live");
    else console.log(err)

});
