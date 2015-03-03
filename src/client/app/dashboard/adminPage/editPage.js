'use strict';


angular.module('myWordPress.editPage', ['ui.router', 'contenteditable'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('dashboard.editPage', {
		url: '/page/:id/edit',
		templateUrl: 'dashboard/adminPage/editPage.html',
		controller: 'editPageController'
	});

}])

.controller('editPageController', ['$scope', 'Page','$state','$stateParams',function($scope,Page, $state,$stateParams){
	$scope.page = Page.get({id: $stateParams.id}, function(page) {
        console.log("get page "+$stateParams.id);
    });
    $scope.editTitle=$scope.page.title;
    $scope.isEdit=false;
 
 $scope.valid=function(){
 	var npage={
 	id : $scope.page._id,
 	title : $scope.editTitle
 	};
 	Page.update({id: $stateParams.id},npage);
 	$scope.isEdit=false;
 	$scope.page = Page.get({id: $stateParams.id}, function(page) {
        console.log("get page "+$stateParams.id);
    });
 };


$scope.reset=function(){
	$scope.editTitle=$scope.page.title;
};
 
 $scope.switchEdit= function(editble){
 	$scope.isEdit=editble;
 };
 	

}]);
