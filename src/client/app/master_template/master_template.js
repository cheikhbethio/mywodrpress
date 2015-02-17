'use strict';


angular.module('myWordPress.master_template', ['ui.router'])

.controller('mastertemplateController', ['$scope', '$location', function($scope, $location){

		$scope.isActiveHeader = function (viewLocation) { 
        	return viewLocation === $location.path();
        }
}]);