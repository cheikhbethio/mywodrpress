angular.module('myWordPress.currentUser', []).factory('CurrentUser', ['$localStorage',  
	function($localStorage) {
  
	//var currentUser;

	return {

		set: function(user) {
			$localStorage.currentUser = angular.copy(user);
		},

		clear: function() {
			delete $localStorage.currentUser;
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

		isAdmin: function(){
			if($localStorage.currentUser === undefined)
				return false;
			else
				if(this.getRight() === 3) 
					return true;
				else 
					return false;
		},

		currentUser: function() { return $localStorage.currentUser; }

	};
}]);

