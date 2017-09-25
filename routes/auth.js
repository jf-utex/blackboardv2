var authController = require('../controllers/authcontroller.js');

module.exports = function(app) {
    app.post('/signup', authController.signup);
		app.get('/signup', function(req, res) {
			res.render('signup');
		});
		app.get('/signin', function(req, res) {
			res.render('signin');
		});
  //   app.get('/signin', authController.signin);

		// }
}
