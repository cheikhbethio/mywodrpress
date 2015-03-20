angular.module('myWordPress.currentUser', []).factory('CurrentUser', function() {
  
	var currentUser;

	return {

		set: function(user) {
			currentUser = angular.copy(user);
		},

		clear: function() {
			currentUser = undefined;
		},

		isLoggedIn: function() {
			if(currentUser === undefined)
				return false;
			else
				return true;
		},

		getRight: function(){
			if(currentUser === undefined)
				return undefined;
			else
				return currentUser.right;
		},

		currentUser: function() { return currentUser; }

	};
});

