var authController = require('../controllers/authcontroller.js');

module.exports = function(app) {

    app.get('/signup', authController.signup);

    exports.signin = function(req, res) {

    res.render('signin');

}

app.get('/signin', authController.signin);

}
