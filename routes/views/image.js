var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'gallery';
	locals.filters = {
		image: req.params.image,
	};
	locals.data = {
		images: [],
	};

	// Load images.
	view.on('init', function (next) {

		var q = keystone.list('Gallery').model.findOne({
			key: locals.filters.image,
		});

		q.exec(function (err, result) {
			locals.data.image = result;
			next(err);
		});

	});

	// Render the view
	view.render('image');
};
