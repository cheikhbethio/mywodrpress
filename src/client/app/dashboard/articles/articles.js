'use strict';


angular.module('myWordPress.admin.article', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('dashboard.indexArticle', {
		url: '/article',
		templateUrl: 'dashboard/articles/index.html',
		controller: 'indexArticleController'
	}).state('dashboard.createArticle', {
		url: '/article/create',
		templateUrl: 'dashboard/articles/create.html',
		controller: 'createArticleController'
	});

}])

.controller('indexArticleController', ['$scope', '$state','$stateParams', 'Article', function($scope, $state, $stateParams, Article){
	$scope.articles = Article.query();

}]).controller('createArticleController', ['$scope', '$state','$stateParams', 'Article', '$localStorage', function($scope, $state, $stateParams, Article, $localStorage){
	$scope.addArticle = function() {

		if(typeof $scope.ispublic === 'undefined')
			$scope.ispublic = false;
		
		var newArticle={
			title: $scope.title,
			author : $localStorage.currentUser._id,
			date : Date.now(),
			content: $scope.htmlVariable,
			ispublic : $scope.ispublic,
			keywords : $scope.keywords
		};

		Article.save(newArticle);
		$state.go('dashboard.indexArticle');
	}
}]);
