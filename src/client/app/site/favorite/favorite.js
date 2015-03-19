'use strict';


angular.module('myWordPress.gestionFavoris', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('site.editFavorite', {
		url: '/favorite/?success?editSuccess',
		templateUrl: 'site/favorite/index.html',
		controller: 'indexFavorisController',
		data: { 
            requireLogin: true
        }
	}).state('site.showFavorite', {
		url: '/favorite/:id',
		templateUrl: 'site/favorite/show.html',
		controller: 'showFavoriteController'
	});

}])

.controller('indexFavorisController', ['$localStorage', 'GetFavorite', '$scope', '$state','$stateParams', 'Article', function($localStorage, GetFavorite, $scope, $state, $stateParams, Article){
	
	if(typeof $localStorage.currentUser != 'undefined'){
    	$scope.id_user = $localStorage.currentUser._id;
    	console.log("id de user actuel"+ JSON.stringify($scope.id_user) );
	}
	
	GetFavorite.get({id : $scope.id_user}, function(res){
		$scope.favorite = res;	
		console.log('liste des favorites :'+ JSON.stringify($scope.favorite));
	});

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
    }

}]).controller('showFavoriteController', ['$scope', '$state','$stateParams', 'Article', function($scope, $state, $stateParams, Article){
	
	$scope.article = Article.get({id: $stateParams.id}, function(page) {
        console.log("get article "+$stateParams.id);
    });

    
}]);
