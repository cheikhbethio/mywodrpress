'use strict';


angular.module('myWordPress.connection', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('site.connection', {
		url: 'connection?registration',
		templateUrl: 'site/connection/connection.html',
		controller: 'connectionController'
	});

}])

.controller('connectionController', ['$scope', '$rootScope', '$state', '$stateParams', '$http', '$localStorage', 'Token', 'CurrentUser',
	function($scope, $rootScope, $state, $stateParams, $http, $localStorage, Token, CurrentUser){

		$scope.userCredentials = {};
		$scope.connectionError = false;
		$scope.registration = $stateParams.registration;

		$scope.connectUser=function(){
	  		if ($scope.connectionForm.$valid) {

				Token.login($scope.userCredentials, function(res){

						CurrentUser.set(res);
						$http.defaults.headers.common['x-access-token'] = res.token;

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