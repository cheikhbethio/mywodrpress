'use strict';

angular.module('myWordPressDashboard', [
	'myWordPressDashboard.master_template',
	'ui.router'
])

.config(['$stateProvider', '$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider.state("home", {
		url: '/'
	});

}]);