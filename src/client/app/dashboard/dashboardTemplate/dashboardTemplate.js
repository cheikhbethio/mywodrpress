'use strict';


angular.module('myWordPress.dashboardTemplate', ['ui.router'])

.controller('dashboardTemplateController', ['$scope', '$location', function($scope, $location){

		$scope.isActiveMenu = function (viewLocation) { 
        	return viewLocation === $location.path();
        }
}]);