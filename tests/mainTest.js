var assert = require('assert');
var path = require('path');
var fs = require('fs');
var line2html = require(__dirname+'/../node/main.js');

describe('メッセージをHTMLに変換する', function() {

	it('メッセージを処理する', function(done) {
		this.timeout(10000);

		var l2h = new line2html('message');

		assert.equal(1, 1);
		done();
	});

});
