'use strict';


angular.module('myWordPress.dashboard_template', ['ui.router'])

.controller('dashboardtemplateController', ['$scope', '$location', function($scope, $location){

		$scope.isActiveMenu = function (viewLocation) { 
        	return viewLocation === $location.path();
        }
}]);