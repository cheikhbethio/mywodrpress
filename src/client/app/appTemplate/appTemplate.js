'use strict';


angular.module('myWordPress.appTemplate', ['ui.router'])

.controller('appTemplateController', ['$scope', '$location' , function($scope, $location){

		$scope.isActiveHeader = function (viewLocation) { 
        	return viewLocation === $location.path();
        }
}]);