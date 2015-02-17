'use strict';


angular.module('myWordPress.connection', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('connection', {
		url: '/connection',
		templateUrl: 'connection/connection.html',
		controller: 'connectionController'
	});

}])

.controller('connectionController', ['$scope', function($scope){

		/*$scope.newUser = {};

		console.log("In inscription controller");

		$scope.saveNewUser = function() {
	  		$scope.$broadcast('show-errors-check-validity');

		  	if ($scope.registrationForm.$valid) {
		    	console.log("Saving the user");
		    	console.log($scope.newUser);
		  	}
		  	else{
		  		console.log("Invalide user: ");
		  		console.log($scope.newUser);
		  	}
		};

		$scope.resetRegistrationForm = function() {
		    $scope.$broadcast('show-errors-reset');
		    $scope.newUser = {};
  		};

  		var printNewUser = function(newUser){
  			console.log("User lastName: " + $scope.lastName);
  			console.log("User firstName: " + $scope.firstName);
  			console.log("User email: " + $scope.email);
  			console.log("User password: " + $scope.password);
  			console.log("User passwordConfirmation: " + $scope.passwordConfirmation);
  		};*/
}]);