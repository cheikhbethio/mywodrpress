'use strict';


angular.module('myWordPress.connection', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('app.connection', {
		url: 'connection',
		templateUrl: 'connection/connection.html',
		controller: 'connectionController'
	});

}])

.controller('connectionController', ['$scope','$http', '$rootScope', '$location' , function($scope, $http, $rootScope, $location){
	$scope.newUser;
	$scope.connectUser=function(){
  		if ($scope.connectionForm.$valid) {
			console.log($scope.newUser);
			$http.post('/connection', {
		      	username: $scope.newUser.login,
		      	password: $scope.newUser.password,
	    	})
		    .success(function(user){
		    	console.log('success');
		    	$rootScope.message = 'Authentication successful!'
		    	$rootScope.userRight = user.right;
		    	$rootScope.userID = user._id;
		    	console.log('id de l\'utilisateur '+$rootScope.userID);
		    	console.log('droit de l\'user '+$rootScope.userRight);
	    		$location.url('/registration');
	    	})
	    	.error(function(){
	    		console.log('defaite');
	      		$rootScope.message = 'Authentication failed.';
	      		$location.url('/connection');
	    	});
		}else{

		}
	}
}]);