'use strict';

angular.module('myWordPress', [
	'myWordPress.registration',
	'myWordPress.master_template',
	'myWordPress.connection',
	'myWordPress.editProfile',
	'myWordPress.pages',
	'ui.bootstrap.showErrors',
	'ui.router',
	'pageServices'
])

.config(['$stateProvider', '$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider.state("home", {
		url: '/'
	});

}]);