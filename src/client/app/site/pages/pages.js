'use strict';


angular.module('myWordPress.pages', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('site.pages', {
		url: '/page/:id',
		templateUrl: 'site/pages/pages.html',
		controller: 'pagesController'
	});

}])

.controller('pagesController', ['$scope', '$state', '$stateParams', 'Page','$localStorage', 'StateNbComment', 'Article', function($scope, $state, $stateParams, Page, $localStorage, StateNbComment, Article){


    $scope.id_user = $localStorage.currentUser._id;

	$scope.page = Page.get({id: $stateParams.id}, function(page) {
        console.log("get page "+$stateParams.id);
        console.log(page.content);/*
        for(var i = 0; i < page.content.length; i++){
        	console.log(page.content[i].isFavorite);
        }*/
    });


	$scope.changeFavoris=function(id_article){
		StateNbComment.post(id_article, function(page) {
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
	}


}]);