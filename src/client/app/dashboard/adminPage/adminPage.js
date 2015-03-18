'use strict';


angular.module('myWordPress.adminPage', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('dashboard.adminPage', {
		url: '/page',
		templateUrl: 'dashboard/adminPage/adminPage.html',
		controller: 'adminPageController'
	});

}])

.controller('adminPageController', ['$scope', 'Page', '$state','$stateParams','ngToast', 'dialogs',
	function($scope,Page, $state,$stateParams, ngToast, dialogs){
	
	$scope.pages = Page.query();
	
	$scope.deletepage=function(pageid) {

		//var dlg = dialogs.confirm();
					/*dlg.result.then(function(btn){
						$scope.confirmed = 'You confirmed "Yes."';
					},function(btn){
						$scope.confirmed = 'You confirmed "No."';
					});*/


		if (confirm("Voulez vous vraiment supprimer cette page?") == true) {
			Page.remove({id: pageid});
			$scope.pages = Page.query();
        }
   	};

    $scope.addPage = function() {

   		if($scope.newPage === undefined || $scope.newPage.title == ""){
   			ngToast.create('Vous devez fournir un titre !');
   		}
   		else {
	   		Page.save($scope.newPage,
	   			function(res){
		   			console.log("Page saved succesfully: " + res);
		   			$scope.pages = Page.query();
		   			$scope.newPage = {};
	   			}, 
	   			function(err){
	   				console.log("Error saving page !" + err);
	   			}
	   		);
	   	}
   };

}]);
