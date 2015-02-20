'use strict';


angular.module('myWordPress.connection', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('app.connection', {
		url: 'connection',
		templateUrl: 'connection/connection.html',
		controller: 'connectionController'
	});

}])

.controller('connectionController', ['$scope', function($scope){

}]);