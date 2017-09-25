var exports = module.exports = {};
var User = require('../models').user;

exports.signup = function(req, res) {
    User.create(req.body).then(function(result) {
    	console.log(result);
    });
}
