'use strict';

angular.module('myWordPress', [
	'myWordPress.inscription',
	'ui.bootstrap.showErrors',
	'ui.router'
])

.config(['$stateProvider', '$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider.state("home", {
		url: '/',
		template: '<a ui-sref="inscription">Inscription</a>'
	});

}]);