'use strict';


angular.module('myWordPress.pages', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('site.pages', {
		url: '/page/:id',
		templateUrl: 'site/pages/pages.html',
		controller: 'pagesController'
	});

}])

.controller('pagesController', ['$scope', '$state', '$stateParams', 'Page','$localStorage', 'AddFavorite', 'Article', '$http', 'User',function($scope, $state, $stateParams, Page, $localStorage, AddFavorite, Article, $http, User){

	if(typeof $localStorage.currentUser != 'undefined'){
    	$scope.id_user = $localStorage.currentUser._id;
    	console.log($scope.id_user );
	}
	
	User.get({id :$scope.id_user}, function(res){
		$scope.ListFavorite = res.favorite;
		for (var i = 0; i <$scope.ListFavorite.length; i++) {
			console.log($scope.ListFavorite[i]);
		};
	})
	$scope.test= function() {
		User.get({id :$scope.id_user}, function(res){
			console.log('uplooaded ');
		})};
	$scope.isFavorite=[];

	$scope.page = Page.get({id: $stateParams.id}, function(page) {
        console.log("get page "+$stateParams.id);
        console.log(page.content);
        var tempo = page.content;
        var bool=false;
        for(var i = 0; i < tempo.length; i++){
        	 for (var j = 0; j < $scope.ListFavorite.length; j++) {
        	 	if($scope.ListFavorite[j] == page.content[i]._id){
        	 		bool = true;
        	 	}
        	 }
        	$scope.isFavorite.push(bool);  
        	bool = false;
        };
         console.log($scope.isFavorite);
    });

	$scope.pushFavoris=function(id_article){
		console.log('push favorite');
		console.log(id_article);
		$scope.test();
		AddFavorite.update({id_user: $scope.id_user, id_art: id_article}, {});
	};

	$scope.popFavoris=function(id_article){
		console.log('pop favorite');
		console.log(id_article);
		$scope.test();
		AddFavorite.remove({id_user: $scope.id_user, id_art: id_article});
	};
	/*
	$scope.changeFavoris=function(id_article){
		AddFavorite.post(id_article, function(page) {
	        Article.get({id : id_article._id}, function(page) {
				$scope.art_to_change = page;
		        var tempo = $scope.page.content;
		        for(var i = 0; i < tempo.length; i++){
		        	if(tempo[i]._id == $scope.art_to_change._id){
		        		tempo[i].isFavorite = $scope.art_to_change.isFavorite;
		        		console.log('modification favorite');
		        	}
		        }
			}); 
	    });
	}*/


}]);