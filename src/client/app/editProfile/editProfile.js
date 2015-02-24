'use strict';


angular.module('myWordPress.editProfile', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('app.editprofile', {
		url: 'editprofil',
		templateUrl: 'editProfile/editProfile.html',
		controller: 'editProfileController'
	});

}])

.controller('editProfileController', ['$scope', '$rootScope', function($scope, $rootScope){

	$scope.profile = {
		firstname: 'test_fname',
		lastname: 'test_lname',
		login: 'test_log',
		email: 'test_email@test.com',				
		password: 'testpass'
	};

	console.log("$rootScope.userID: " + $rootScope.userID);


	$scope.loginAlreadyUsed = false;
	$scope.emailAlreadyUsed = false;


	$scope.saveNewUser = function() {

		  	if ($scope.registrationForm.$valid) {

		    	if($scope.newUser.password === $scope.newUser.passwordConfirmation){

		    		var nuser =  {
						firstname: $scope.newUser.firstName,
						lastname: $scope.newUser.lastName, 
						login: $scope.newUser.login,
						email: $scope.newUser.email,
						password: $scope.newUser.password
					};

		    		user.save(nuser, function(resp) {
						if(resp.error == 0){
							console.log("Successfuly posted: " + resp.error);
							$state.go('app');
						}else if( resp.error == 1){
							$scope.emailAlreadyUsed = true;
						}else if(resp.error == 2){
							$scope.loginAlreadyUsed = true;
						}

					}, function(error){
						console.log("Response: " + error);
					});

		    	}
		    	else{
		    		$scope.nonMatchingPwd = true;
		    		console.log("the passwords don't match !!");
		    	}
		  	}
		  	else{
		  		console.log("Invalide form: ");
		  	}

		  	console.log($scope.newUser);
		};

}]);