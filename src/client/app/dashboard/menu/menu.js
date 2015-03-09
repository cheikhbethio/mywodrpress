'use strict';


angular.module('myWordPress.admin.menu', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('dashboard.indexMenu', {
		url: '/menu',
		templateUrl: 'dashboard/menu/index.html',
		controller: 'indexMenuController'
	})

}]).controller('indexMenuController', ['$scope', '$state','$stateParams', 'Page', 'Preferences', 'Menu', function($scope, $state, $stateParams, Page, Preferences, Menu){
	$scope.boolAdd = false;
	$scope.firstTabSelected = true;
	$scope.preferences = Preferences.get();

	$scope.pages = Page.query();
	$scope.menus = Menu.query();

	$scope.showAddMenu = function(){
		$scope.boolAdd = true;
	}

	$scope.saveMenu = function() {
		if ($scope.createMenuForm.$valid){ 
			
			var newMenu={
			   	name: $scope.menu.title,
				single: $scope.firstTabSelected,
				page: $scope.menu.page._id,
				dropdown: [$scope.menu.page._id]
			};


			//console.log($scope.menu.page._id);
			Menu.save(newMenu);
			//$state.go('dashboard.indexArticle');
		} else {
			console.log('Formulaire Invalide.');
		}
	}

}]);
