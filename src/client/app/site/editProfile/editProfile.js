'use strict';


angular.module('myWordPress.editProfile', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('site.editprofile', {
		url: '/editprofile',
		templateUrl: 'site/editProfile/editProfile.html',
		controller: 'editProfileController',
		data: { 
            requireLogin: true
        }
	});

}])

.controller('editProfileController', ['$scope', '$rootScope', 'User', '$localStorage', 
	function($scope, $rootScope, User, $localStorage){

	$scope.profile = angular.copy($localStorage.currentUser);

	console.log("USER editprofile: " + $scope.profile);

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
	$scope.edit_save = false;

	$scope.editInformation = function(index, key){
		console.log("key: " + key);
		console.log("found index: " + $scope.profile[key]);
		$scope.editMode = true;
		$scope.edit_index = index;
		$scope.edit_save = angular.copy($scope.profile[key]);
	};

	$scope.cancelEditInformation = function(key){
		$scope.profile[key] = $scope.edit_save;
		$scope.reset();
	};

	$scope.saveEditInformation = function(key){
		$scope.reset();
	};

	$scope.reset = function(){
		$scope.editMode = false;
		$scope.edit_index = false;
		$scope.edit_save = false;
	};

	$scope.isEditMode = function(index) {
		return $scope.edit_index == index && $scope.editMode == true;
	};

	$scope.isDisabled = function(index){
		return $scope.edit_mode == true && $scope.edit_index != index;
	}


	$scope.saveUser = function() {

		User.update($scope.profile, function(resp) {

			if(resp.error == 0){
				console.log("Successfuly posted: " + resp.error);
				$state.go('app');
			} 
			else if( resp.error == 1){
				$scope.emailAlreadyUsed = true;
			} 
			else if(resp.error == 2){
				$scope.loginAlreadyUsed = true;
			}
			else if(resp.error == 3){
				console.log("Bad ID !!");
			}

		}, function(error) {
			console.log("Response: " + error);
		});
	};

}]);