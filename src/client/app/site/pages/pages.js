'use strict';


angular.module('myWordPress.pages', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('site.pages', {
		url: '/page/:id',
		templateUrl: 'site/pages/pages.html',
		controller: 'pagesController'
	});

}])

.controller('pagesController', ['$scope', '$state', '$stateParams', 'Page','$localStorage', 'StateNbComment', function($scope, $state, $stateParams, Page, $localStorage, StateNbComment){

    $scope.id_user = $localStorage.currentUser._id;
    console.log($scope.id_user + " test id lllllllllllllllllllllllllllll");
	

	$scope.page = Page.get({id: $stateParams.id}, function(page) {
        console.log("get page "+$stateParams.id);
    });
	//$scope.nbComment =0;
	StateNbComment.get({id: $scope.id_user}, function(res) {
		$scope.nbComment = res.aaa;
        console.log("getted comment "+ $scope.nbComment);
    });
    console.log($scope.nbComment);


	$scope.okFavoris = false;

	$scope.changeFavoris=function(){
		$scope.okFavoris = !$scope.okFavoris;
	}


}]);