var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * PostCategory Model
 * ==================
 */

var TopPage = new keystone.List('TopPage', {
	autokey: { from: 'name', path: 'key', unique: true },
});

TopPage.add({
	name: { type: String, required: true },
	text: { type: Types.Html, wysiwyg: true},
	isShowHome: { type: Boolean }
});

TopPage.register();
