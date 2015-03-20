angular.module('myWordPress.currentUser', []).factory('CurrentUser', ['$localStorage',  
	function($localStorage) {
  
	//var currentUser;

	return {

		set: function(user) {
			$localStorage.currentUser = angular.copy(user);
		},

		clear: function() {
			$localStorage.currentUser = undefined;
		},

		isLoggedIn: function() {
			if($localStorage.currentUser === undefined)
				return false;
			else
				return true;
		},

		getRight: function(){
			if($localStorage.currentUser === undefined)
				return undefined;
			else
				return $localStorage.currentUser.right;
		},

		currentUser: function() { return $localStorage.currentUser; }

	};
}]);

