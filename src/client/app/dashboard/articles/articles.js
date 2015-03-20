'use strict';


angular.module('myWordPress.admin.article', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('dashboard.indexArticle', {
		url: '/article/?success?editSuccess',
		templateUrl: 'dashboard/articles/index.html',
		controller: 'indexArticleController'
	}).state('dashboard.createArticle', {
		url: '/article/create',
		templateUrl: 'dashboard/articles/create.html',
		controller: 'createArticleController'
	}).state('dashboard.editArticle', {
		url: '/article/:id/edit',
		templateUrl: 'dashboard/articles/edit.html',
		controller: 'editArticleController'
	}).state('dashboard.showArticle', {
		url: '/article/:id',
		templateUrl: 'dashboard/articles/show.html',
		controller: 'showArticleController'
	});

}])

.controller('indexArticleController', ['$scope', '$state','$stateParams', 'Article', function($scope, $state, $stateParams, Article){
	
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
    }

}]).controller('createArticleController', ['$scope', '$state','$stateParams', 'Article', 'CurrentUser', function($scope, $state, $stateParams, Article, CurrentUser){
	
	$scope.user = CurrentUser;

	$scope.addArticle = function() {
		if ($scope.createArticleForm.$valid){ 
			if(typeof $scope.ispublic === 'undefined')
				$scope.ispublic = false;
			
			var newArticle={
				title: $scope.title,
				author : CurrentUser.currentUser()._id,
				date : Date.now(),
				content: $scope.htmlVariable,
				ispublic : $scope.ispublic,
				keywords : $scope.keywords
			};

			Article.save(newArticle);
			$state.go('dashboard.indexArticle', {success:true});
		} else {
			console.log('Formulaire Invalide.');
		}
	}

}]).controller('editArticleController', ['$scope', '$state','$stateParams', 'Article', function($scope, $state, $stateParams, Article){
	
	$scope.article = Article.get({id: $stateParams.id}, function(page) {
        console.log("get article "+$stateParams.id);
    });

    $scope.editArticle = function(){
    	if ($scope.editArticleForm.$valid){ 
	    	Article.update({id: $stateParams.id}, $scope.article);
	    	$state.go('dashboard.indexArticle', {editSuccess:true});
	   	} else {
			console.log('Formulaire Invalide.');
		}
    }

}]).controller('showArticleController', ['$scope', '$state','$stateParams', 'Article', function($scope, $state, $stateParams, Article){
	
	$scope.article = Article.get({id: $stateParams.id}, function(page) {
        console.log("get article "+$stateParams.id);
    });

    
}]);
