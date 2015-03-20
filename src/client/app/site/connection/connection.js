'use strict';


angular.module('myWordPress.connection', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('site.connection', {
		url: 'connection?registration',
		templateUrl: 'site/connection/connection.html',
		controller: 'connectionController'
	});

}])

.controller('connectionController', ['$scope','$http', '$rootScope', '$state', '$stateParams', 'Login','Token', "$localStorage", function($scope, $http, $rootScope, $state, $stateParams, Login, Token, $localStorage){
	$scope.userCredentials = {};
	$scope.connectionError = false;
	$scope.registration = $stateParams.registration;

	$scope.connectUser=function(){
  		if ($scope.connectionForm.$valid) {

			Token.login($scope.userCredentials, function(res){

					$localStorage.accessToken = res.token;
					$localStorage.currentUser = res.user;

					$state.go('site.home', {connectionSuccess:true});

				}, function(err){
					console.log('Could not get token: ' + err.data.message);
			});
		}
		else {
			console.log('Formulaire Invalide.');
			$scope.connectionError = true;
		}
	}

	$scope.closeAlert = function() {
		$scope.connectionError = false;
		$scope.registration = false;
	};

}]);