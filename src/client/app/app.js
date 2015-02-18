'use strict';

angular.module('myWordPress', [
	'myWordPress.registration',
	'myWordPress.master_template',
	'myWordPress.connection',
	'ui.bootstrap.showErrors',
	'ui.router'
])

.config(['$stateProvider', '$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider.state("home", {
		url: '/'
	});

}]);