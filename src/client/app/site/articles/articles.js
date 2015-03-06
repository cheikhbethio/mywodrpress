'use strict';


angular.module('myWordPress.site.article', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('site.showArticle', {
		url: 'article/:id',
		templateUrl: 'site/articles/show.html',
		controller: 'siteArticleController'
	})

}])

.controller('siteArticleController', ['$scope', '$state','$stateParams',"$localStorage", 'Article','Commentaire', function($scope, $state, $stateParams,$localStorage, Article,Commentaire){
	

   $scope.boolformulaire = false;
   
	$scope.article = Article.get({id: $stateParams.id}, function(page) {
        console.log("get article "+$stateParams.id);
    });

    $scope.addComment=function(){

    	var newComment={
			author : $localStorage.currentUser._id,
			article :$scope.article._id,
			date : Date.now(),
			content : $scope.comment.content
		};

		Commentaire.save(newComment, function(res){

			Commentaire.get({id: $stateParams.id},function(res){
				$scope.commentList = res;
			});

			$scope.comment.content = "";
			$scope.boolformulaire=false;
		});
	};

    $scope.modeFormulaire = function(editable){
        $scope.boolformulaire=editable;
    };

    $scope.commentList = Commentaire.get({id: $stateParams.id},function(){
    	console.log('sds,dsd;:s');
    });

}]);
