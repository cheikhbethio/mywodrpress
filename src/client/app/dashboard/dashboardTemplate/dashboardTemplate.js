'use strict';


angular.module('myWordPress.dashboardTemplate', ['ui.router'])

.controller('dashboardTemplateController', ['$scope', '$state','$stateParams', function($scope, $state, $stateParams){

		$scope.menuOpen = false;

		$scope.isActiveDashboard = function (viewLocation) {
        	return viewLocation === $state.current.name;
        }

        $scope.snapOpts = {
      		disable: 'right'
    	};

    	$scope.changeArrowOrientation = function() {
    		if($scope.menuOpen == false){
    			$scope.menuOpen = true
    		} else if ($scope.menuOpen == true) {
    			$scope.menuOpen = false;
    		}
    	};
}]);