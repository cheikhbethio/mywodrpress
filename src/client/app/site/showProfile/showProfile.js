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
.controller('showProfileController', ['$scope','$localStorage', 'User_articles','User_comments',function($scope,$localStorage,User_articles,User_comments){
           $scope.articles = User_articles.get({id: $localStorage.currentUser._id}, function(articles){
                  console.log("get articles for user_id: "+$localStorage.currentUser._id);
           });
           $scope.comments = User_comments.get({id: $localStorage.currentUser._id}, function(comments){
                  console.log("get comments for user_id: "+$localStorage.currentUser._id);
           });
           $scope.user=$localStorage.currentUser;
}]);
