'use strict';


angular.module('myWordPress.site.home', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('site.home', {
		url: '/?connectionSuccess',
		templateUrl: 'site/home/index.html',
		controller: 'siteHomeController'
	});

}])

.controller('siteHomeController', ['$scope', '$state', '$stateParams', 'Article', 'CurrentUser', 'User',
	function($scope, $state, $stateParams, Article, CurrentUser, User){

	$scope.articlesHome = Article.query()

	$scope.user = CurrentUser;

	$scope.connectionSuccess = $stateParams.connectionSuccess;

	$scope.closeAlert = function() {
        $scope.connectionSuccess = false;
    };

    	User.get({id :$scope.id_user}, function(res){
		$scope.ListFavorite = res.favorite;
		for (var i = 0; i <$scope.ListFavorite.length; i++) {
			console.log($scope.ListFavorite[i]);
		};
	});


	$scope.isFavorite=[];
	$scope.mypage;


	User.get({id :$scope.id_user}, function(res){
		$scope.ListFavorite = res.favorite;
        
        for(var i = 0; i < tempo.length; i++){
        	 for (var j = 0; j < $scope.ListFavorite.length; j++) {
        	 	if($scope.ListFavorite[j] == tempo[i]._id){
        	 		bool = true;
        	 	}
        	 }
        	$scope.isFavorite[i]=bool;  
        	bool = false;
        };
        console.log($scope.isFavorite);
		
	});


	$scope.pushFavoris=function(id_article){
		console.log('push favorite');
		console.log(id_article);
		console.log($scope.mypage);
		console.log($scope.ListFavorite);
		
		AddFavorite.update({id_user: $scope.id_user, id_art: id_article}, {});
		
		User.get({id :$scope.id_user}, function(res){
			$scope.ListFavorite = res.favorite;
	        var temp = $scope.mypage;
	        var bool=false;
	        for(var i = 0; i < temp.length; i++){
	        	 for (var j = 0; j < $scope.ListFavorite.length; j++) {
	        	 	if($scope.ListFavorite[j] == temp[i]._id){
	        	 		bool = true;
	        	 	}
	        	 }
	        	$scope.isFavorite[i]=bool;  
	        	bool = false;
	        };
	         console.log($scope.isFavorite);
		});
	};

	$scope.popFavoris=function(id_article){
		console.log('pop favorite');
		console.log(id_article);
		console.log($scope.mypage);
		console.log($scope.ListFavorite);
		AddFavorite.remove({id_user: $scope.id_user, id_art: id_article});

		User.get({id :$scope.id_user}, function(res){
			$scope.ListFavorite = res.favorite;
	        var temp = $scope.mypage;
	        var bool=false;
	        for(var i = 0; i < temp.length; i++){
	        	 for (var j = 0; j < $scope.ListFavorite.length; j++) {
	        	 	if($scope.ListFavorite[j] == temp[i]._id){
	        	 		bool = true;
	        	 	}
	        	 }
	        	$scope.isFavorite[i]=bool;  
	        	bool = false;
	        };
	         console.log($scope.isFavorite);
		});
	};
}]);
