module.exports = function(config){
	config.set({

		basePath : './',

		files : [



			'app/bower_components/jquery/dist/jquery.min.js',
			'app/bower_components/angular/angular.js',
			'app/bower_components/angular-resource/angular-resource.js',
			'app/bower_components/angular-contenteditable/angular-contenteditable.js',
			'app/bower_components/bootstrap/dist/js/bootstrap.min.js',
			'app/bower_components/angular-ui-router/release/angular-ui-router.min.js',
			'app/bower_components/ngstorage/ngStorage.js',
			'app/bower_components/angular-bootstrap-show-errors/src/showErrors.js',
			'app/bower_components/angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module.js',
			'app/bower_components/textAngular/dist/textAngular-rangy.min.js',
			'app/bower_components/textAngular/dist/textAngular-sanitize.min.js',
			'app/bower_components/textAngular/dist/textAngular.min.js',
			'app/bower_components/snapjs/snap.js',
			'app/bower_components/angular-snap/angular-snap.js',
			'app/bower_components/ngToast/dist/ngToast.js',
			'app/bower_components/jquery-minicolors/jquery.minicolors.js',
			'app/bower_components/angular-minicolors/angular-minicolors.js',
			'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
			'app/bower_components/angular-dialog-service/dist/dialogs.min.js',
			'app/bower_components/angular-dialog-service/dist/dialogs-default-translations.min.js',

			'app/bower_components/angular/angular.js',
			'node_modules/angular-ui-router/release/angular-ui-router.js',
			'node_modules/angular-bootstrap-show-errors/src/showErrors.js',
			'app/bower_components/angular-mocks/angular-mocks.js',

			'app/app.js',

			'components/registration/registration-directive.js',

			'app/components/**/*.js',
			'app/site/**/*.js',
			'app/dashboard/**/*.js'
			

			
			/*'app/site/registration/*.js',*/
			/*'app/master_template/*.js', */
			//'app/site/connection/*.js'
			
		],

		autoWatch : true,

		frameworks: ['jasmine'],

		browsers : ['chromium-browser', 'Chrome'],

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