'use strict';

describe('addition', function () {
	it('should add 1+1 correctly (a stupid test to rule them all)', function (done) {
		var onePlusOne = 1 + 1;
		onePlusOne.should.equal(2);

		done();
	});
});