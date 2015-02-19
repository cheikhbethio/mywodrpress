module.exports = function(config){
	config.set({

		basePath : './',

		files : [
			'app/bower_components/angular/angular.js',
			'node_modules/angular-ui-router/release/angular-ui-router.js',
			'node_modules/angular-bootstrap-show-errors/src/showErrors.js',
			'app/bower_components/angular-mocks/angular-mocks.js',
			'app/app.js',
			'app/registration/*.js',
			'app/master_template/*.js',
			'app/connection/*.js'
			
		],

		autoWatch : true,

		frameworks: ['jasmine'],

		browsers : ['Chrome'],

		plugins : [
			'karma-chrome-launcher',
			'karma-firefox-launcher',
			'karma-jasmine',
			'karma-junit-reporter'
		],

		junitReporter : {
			outputFile: 'test_out/unit.xml',
			suite: 'unit'
		}
	});
};