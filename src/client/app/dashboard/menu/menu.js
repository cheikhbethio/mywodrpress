'use strict';


angular.module('myWordPress.admin.menu', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('dashboard.indexMenu', {
		url: '/menu',
		templateUrl: 'dashboard/menu/index.html',
		controller: 'indexMenuController'
	})

}]).controller('indexMenuController', ['$scope', '$state','$stateParams', 'Page', 'Preferences', 'Menu', 'CurrentUser', function($scope, $state, $stateParams, Page, Preferences, Menu, CurrentUser){
	$scope.boolAdd = false;
	$scope.firstTabSelected = true;
	$scope.preferences = Preferences.get();

	$scope.pages = Page.query();
	$scope.menus = Menu.query();
	$scope.user = CurrentUser;

	$scope.dropdown = [{ 
		title : "", 
		page : {}
	}];

	$scope.addSubMenu = function(){
		$scope.dropdown.push({
			title : "",
			page : {}
		});
	}

	$scope.showAddMenu = function(){
		$scope.boolAdd = true;
	}

	$scope.saveMenuSimple = function() {
		if ($scope.createMenuForm.$valid){ 
			
			var newMenu={
			   	name: $scope.menu.title,
				single: $scope.firstTabSelected,
				page: $scope.menu.page._id
			};

			Menu.save(newMenu);
			$scope.menus = Menu.query();

			$scope.menu = {};
			$scope.dropdown = [{ 
				title : "", 
				page : {}
			}];

			$scope.boolAdd = false;

		} else {
			console.log('Formulaire Invalide.');
		}
	}

	$scope.saveMenuDropDown = function() {
		if ($scope.createMenuForm.$valid){ 
			
			var newMenu={
			   	name: $scope.menu.title,
				single: $scope.firstTabSelected,
				dropdown: $scope.dropdown
			};

			Menu.save(newMenu);
			$scope.menus = Menu.query();
			
			$scope.menu = {};
				$scope.dropdown = [{ 
				title : "", 
				page : {}
			}];

			
			$scope.boolAdd = false;

		} else {
			console.log('Formulaire Invalide.');
		}
	}


	$scope.deleteMenu = function(articleId, name){
		if (confirm("Voulez vous vraiment supprimer le menu "+ name +"?") == true) {
			Menu.remove({id: articleId});
			$scope.menus = Menu.query();
		}
	}

}]);
