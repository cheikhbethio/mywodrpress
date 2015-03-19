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
.controller('showProfileController', ['$scope','$state','$localStorage', 'User_articles','User_comments',function($scope,$state,$localStorage,User_articles,User_comments){
           $scope.articles = User_articles.get({id: $localStorage.currentUser._id}, function(articles){
                  console.log("get articles for user_id: "+$localStorage.currentUser._id);
           });
           $scope.comments = User_comments.get({id: $localStorage.currentUser._id}, function(comments){
                  console.log("get comments for user_id: "+$localStorage.currentUser._id);
           });
           $scope.user=$localStorage.currentUser;
           console.log($scope.user);

           $scope.editprofile= function(){
                    $state.go('site.editprofile');

           }

           $scope.editFavorite= function(){
                    $state.go('site.editFavorite');

           }
           if($scope.user.right===0){
            $scope.user_statut ='membre';
          }
          else if($scope.user.right===1){
                  $scope.user_statut ='redacteur'; 
          }
          else if($scope.user.right===2){
                  $scope.user_statut ='moderateur'; 
          }
          else if($scope.user.right===3){
                  $scope.user_statut ='admin'; 
          }
}]);
