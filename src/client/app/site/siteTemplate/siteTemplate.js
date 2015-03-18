'use strict';


angular.module('myWordPress.siteTemplate', ['ui.router'])

.controller('siteTemplateController', ['$scope', '$rootScope', '$state','$stateParams', '$localStorage', 'Preferences', 'Menu', 
        function($scope, $rootScope, $state, $stateParams, $localStorage, Preferences, Menu){

                $scope.menus = Menu.query();

                $scope.preferences = Preferences.get(function(succ){
                        console.log("succes");
                        console.log("prefs title: " + $scope.preferences.site.subtitle);
                }, function(err){
                        console.log("error");
                });
                
                $scope.isActiveHeader = function (viewLocation) { 
                	return viewLocation === $state.current.name;
                }

                $scope.isActiveHeaderPage = function (stateParamsId) { 
                        return stateParamsId === $state.params.id;
                }

                $scope.isUserConnected = function() {
                	$rootScope.currentUser = $localStorage.currentUser;
                	return typeof $localStorage.currentUser != 'undefined';
                }

                $scope.logOut = function() {
                        delete $rootScope.currentUser;
                	delete $localStorage.currentUser;
                        $state.go("site.home", {connectionSuccess:false});
                }

                $scope.search= function(key){
                        $state.go('site.searchKeyWord',{keywords: key});
                }
}]);