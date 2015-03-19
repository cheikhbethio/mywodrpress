'use strict'

angular.module('myWordPress.showProfile', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('site.showprofile', {
		url: '/showprofile/:id',
		templateUrl: 'site/showProfile/showProfile.html',
		controller: 'showProfileController',
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

.controller('showProfileController', ['$scope','$state', '$stateParams', '$localStorage', 'User_articles','User_comments', 'User', 
  function($scope, $state, $stateParams, $localStorage, User_articles, User_comments, User){

    $scope.user = User.get({id: $stateParams.id}, function(user) {
        console.log("get user "+$stateParams.id);
        console.log(user);


        $scope.articles = User_articles.get({id:user._id}, function(articles){
            console.log("get articles for user_id: "+user._id);
        });
        $scope.comments = User_comments.get({id: user._id}, function(comments){
            console.log("get comments for user_id: "+user._id);
        });

        if(user.right===0){
            $scope.user_statut ='Membre';
        }
        else if(user.right===1){
            $scope.user_statut ='Rédacteur'; 
        }
        else if(user.right===2){
            $scope.user_statut ='Moderateur'; 
        }
        else if(user.right===3){
          $scope.user_statut ='Administrateur'; 
        }
    });



           //$scope.user=$localStorage.currentUser;

           $scope.editprofile= function(){
            $state.go('site.editprofile');

        }

    }]);

