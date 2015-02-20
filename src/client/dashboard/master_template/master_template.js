'use strict';


angular.module('myWordPressDashboard.master_template', ['ui.router'])

.controller('mastertemplateController', ['$scope', '$location', function($scope, $location){

		$scope.isActiveMenu = function (viewLocation) { 
        	return viewLocation === $location.path();
        }
}]);