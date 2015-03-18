'use strict';


angular.module('myWordPress.site.article', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('site.showArticle', {
		url: 'article/:id?isfavorite',
		templateUrl: 'site/articles/show.html',
		controller: 'siteArticleController'
	})

}])

.controller('siteArticleController', ['$scope', '$state','$stateParams',"$localStorage", 'Article','Commentaire', 'AddFavorite', function($scope, $state, $stateParams,$localStorage, Article,Commentaire, AddFavorite){
	
	//$scope.isfavorite;

	console.log($scope.isfavorite + ' test passage de parametre');

    $scope.boolformulaire = false;
   
	$scope.article = Article.get({id: $stateParams.id}, function(page) {
        console.log("get article "+$stateParams.id);
    });
/////////////////////////////////////////////////////////////////////

	$scope.changeFavoris=function(){
		var tempo = $scope.article;

		AddFavorite.post(tempo, function(res){
		        		//$scope.article.isFavorite = res.isFavorite;
		        	//	$scope.isfavorite = page.isFavorite;
		        		console.log($scope.article);
		        		console.log(res);

			}); 
	    //});		
	};

/////////////////////////////////////////////////
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
