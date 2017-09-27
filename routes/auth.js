var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {

    app.get('/signup', authController.signup);
    app.get('/signin', authController.signin);
    //a route for posting to signup
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard',

        failureRedirect: '/signup'
    }


));
    //app.get('/dashboard',isLoggedIn,authController.dashboard);
    app.get('/dashboard',isLoggedIn, authController.dashboard);
    app.get('/checkin', authController.checkin);
    app.post('/present', authController.present);
    app.get('/logout',authController.logout);
    function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())

        return next();

    res.redirect('/signin');

}

app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',

        failureRedirect: '/signin',

    }

));


}
