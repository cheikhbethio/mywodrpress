'use strict';


angular.module('myWordPress.site.article', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('site.showArticle', {
		url: 'article/:id',
		templateUrl: 'site/articles/show.html',
		controller: 'siteArticleController'
	})

}])

.controller('siteArticleController', ['$scope', '$state','$stateParams', 'Article', function($scope, $state, $stateParams, Article){
	
	$scope.article = Article.get({id: $stateParams.id}, function(page) {
        console.log("get article "+$stateParams.id);
    });

}]);
