'use strict';


angular.module('myWordPress.admin.gestionFavorite', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('dashboard.indexFavorite', {
		url: '/favorite/?success?editSuccess',
		templateUrl: 'dashboard/favorite/index.html',
		controller: 'indexFavorisController'
	}).state('dashboard.showFavorite', {
		url: '/favorite/:id',
		templateUrl: 'dashboard/favorite/show.html',
		controller: 'showFavoriteController'
	});

}])

.controller('indexFavorisController', ['$scope', '$state','$stateParams', 'Article', function($scope, $state, $stateParams, Article){
	/*
	$scope.articles = Article.query();

	$scope.success = $stateParams.success;
	$scope.editSuccess = $stateParams.editSuccess;

	$scope.closeAlert = function() {
        $scope.success = false;
        $scope.editSuccess = false;
    };

	$scope.deleteArticle=function(articleId) {
		if (confirm("Voulez vous vraiment supprimer cet article?") == true) {
			Article.remove({id: articleId});
			$scope.articles = Article.query();
		}
    }*/

}]).controller('showFavoriteController', ['$scope', '$state','$stateParams', 'Article', function($scope, $state, $stateParams, Article){
	/*
	$scope.article = Article.get({id: $stateParams.id}, function(page) {
        console.log("get article "+$stateParams.id);
    });*/

    
}]);
