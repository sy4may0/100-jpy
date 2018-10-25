var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	locals.data = {
		authors: [],
		toppages: []
	};
	
	// Load the Author
	view.on('init', function (next) {
		keystone.list('User').model.find({
			isShowHome: true
		}).exec(function (err, result) {
			locals.data.authors = result;
			next(err);
		});
	});	
	
	view.on('init', function (next) {
		keystone.list('TopPage').model.find({
			isShowHome: true
		}).exec(function (err, result) {
			locals.data.toppages = result;
			next(err);
		});
	});	
	
	// Render the view
	view.render('index');
};
