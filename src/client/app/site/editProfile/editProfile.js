'use strict';


angular.module('myWordPress.editProfile', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('site.editprofile', {
		url: 'editprofil',
		templateUrl: 'site/editProfile/editProfile.html',
		controller: 'editProfileController'
	});

}])

.controller('editProfileController', ['$scope', '$rootScope', 'User', '$localStorage', 
	function($scope, $rootScope, User, $localStorage){

	$scope.profile = $localStorage.currentUser;

	$scope.keysToValues = {
		firstname: 'Nom',
		lastname: 'Prenom', 
		login: 'Login',
		email: 'Email'
	};
	

	$scope.loginAlreadyUsed = false;
	$scope.emailAlreadyUsed = false;


	$scope.editMode = false;
	$scope.edit_index = false;

	$scope.editInformation = function(index, key){
		console.log("key: " + key);
		console.log("found index: " + $scope.profile[key]);
		$scope.editMode = true;
		$scope.edit_index = index;
	};

	$scope.cancelEditInformation = function(){
		$scope.editMode = false;
		$scope.edit_index = false;
	};

	$scope.isEditMode = function(index) {
		return $scope.edit_index == index && $scope.editMode == true;
	};


	$scope.saveNewUser = function() {

	  	if ($scope.registrationForm.$valid) {

	    	if($scope.newUser.password === $scope.newUser.passwordConfirmation){

	    		var edited_profile =  {
					firstname: $scope.profile.firstName,
					lastname: $scope.profile.lastName, 
					login: $scope.profile.login,
					email: $scope.profile.email,
					password: $scope.profile.password
				};

	    		User.save(edited_profile, function(resp) {
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