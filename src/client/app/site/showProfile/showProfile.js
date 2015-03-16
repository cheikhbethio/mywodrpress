'use strict'

angular.module('myWordPress.showProfile', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('site.showprofile', {
		url: '/showprofile',
		templateUrl: 'site/showProfile/showProfile.html',
		controller: 'showProfileController',
		data: { 
            requireLogin: true
        }
	});

}])
.controller('showProfileController', ['$scope','$state','$stateParams','User_articles','User_comments'],function($scope, $state,$stateParams,User_articles,User_comments){
           $scope.articles = User_articles.get({id: $stateParams.id}, function(articles){
                  console.log("get articles for user_id: "+$stateParams.id);
           });
          // $scope.comments = User_comments.get();
})