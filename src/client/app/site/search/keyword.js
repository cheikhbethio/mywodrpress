'use strict';


angular.module('myWordPress.site.searchKeyWord', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('site.showArticle', {
		url: 'article/search',
		templateUrl: 'site/search/show.html',
		controller: 'siteSearchController',
		params: ['keywords']
	})

}])

.controller('siteSearchController', ['$scope', '$state','$stateParams', 'searchKeyWord', function($scope, $state, $stateParams, searchKeyWord){
	
	$scope.article = Article.get({id: $stateParams.id}, function(page) {
        console.log("get article "+$stateParams.id);
    });

}]);$