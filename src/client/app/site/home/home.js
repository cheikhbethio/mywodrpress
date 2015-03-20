'use strict';


angular.module('myWordPress.site.home', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('site.home', {
		url: '/?connectionSuccess',
		templateUrl: 'site/home/index.html',
		controller: 'siteHomeController'
	});

}])

.controller('siteHomeController', ['$scope', '$state', '$stateParams', 'Article', 'CurrentUser', 
	function($scope, $state, $stateParams, Article, CurrentUser){

	$scope.articlesHome = Article.query()

	$scope.connectionSuccess = $stateParams.connectionSuccess;

	console.log("Current user: " + JSON.stringify(CurrentUser.currentUser()));

	$scope.closeAlert = function() {
        $scope.connectionSuccess = false;
    };
}]);
