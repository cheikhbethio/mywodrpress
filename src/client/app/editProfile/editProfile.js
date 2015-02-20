'use strict';


angular.module('myWordPress.editProfile', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('app.editprofile', {
		url: 'editprofil',
		templateUrl: 'editProfile/editProfile.html',
		controller: 'editProfileController'
	});

}])

.controller('editProfileController', ['$scope', function($scope){

}]);