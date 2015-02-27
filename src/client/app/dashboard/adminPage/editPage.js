'use strict';


angular.module('myWordPress.editPage', ['ui.router', 'contenteditable'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('dashboard.editPage', {
		url: '/page/edit/:id',
		templateUrl: 'dashboard/adminPage/editPage.html',
		controller: 'editPageController'
	});

}])

.controller('editPageController', ['$scope', 'Page','$state','$stateParams',function($scope,Page, $state,$stateParams){
	$scope.page = Page.get({id: $stateParams.id}, function(page) {
        console.log("get page "+$stateParams.id);
    });
    
 $scope.editpage=Page.get({id: $stateParams.id}, function(page) {
        console.log("get page "+$stateParams.id);
    });
 
 $scope.valid=function(){
 	var npage={
 	id : $scope.page._id,
 	title : $scope.editpage.title
 	};
 	Page.update({id: $stateParams.id},npage);
 };
 
 $scope.reset= function(valedit,valinit){
 	console.log("reset");
	valedit.title=valinit.title;
 };
 	

}]);
