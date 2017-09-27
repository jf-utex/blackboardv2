var exports = module.exports = {}

exports.signup = function(req, res) {

    res.render('signup');

};
var models = require("../models");
exports.present = function(req, res) {
	console.log(req.session.userinfo.firstname + ' is present, now lets save in db');
	var student = models.student;
	console.log(student);
	console.log('request: ' + req.body.assignment);
	data = {
		id: req.session.userinfo.id,
		email: req.session.userinfo.email,
		firstname: req.session.userinfo.firstname,
		lastname: req.session.userinfo.lastname,
		present: true,
		assignment: req.body.assignment
	};
	student.create(data).then(function(newstudent, created) {
		if(newstudent) {
			console.log('created');	
		} else {
			console.log('NOT created')
		}
		
	})
	res.render('checkin');
};

exports.signin = function(req, res) {

    res.render('signin');

<<<<<<< HEAD
=======

    

 
>>>>>>> 9d358d8a71d1e183be529d0facb5ddeabfb38525
};
exports.dashboard = function(req, res) {

    res.render('dashboard');
<<<<<<< HEAD

}
=======
   
 
};
exports.checkin = function(req, res) {
 
    res.render('checkin');
 
};
>>>>>>> 9d358d8a71d1e183be529d0facb5ddeabfb38525
exports.logout = function(req, res) {

    req.session.destroy(function(err) {
<<<<<<< HEAD

        res.redirect('/');

    });

}
=======
 
        res.redirect('/signin');
 
    });
    
 
}
>>>>>>> 9d358d8a71d1e183be529d0facb5ddeabfb38525
