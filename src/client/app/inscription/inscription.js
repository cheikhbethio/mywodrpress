'use strict';


angular.module('myWordPress.inscription', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider){

	$stateProvider.state('inscription', {
		url: '/inscription',
		templateUrl: 'inscription/inscription.html',
		controller: 'inscriptionController'
	});

}])

.controller('inscriptionController', ['$scope', 
	function($scope){
		console.log("In inscription controller");
}]);