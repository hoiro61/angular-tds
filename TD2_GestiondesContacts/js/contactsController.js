angular.module("AppGestiondesContacts").
controller("contactsController", ['$scope', function($scope){
	
	var self = this;
	
	$scope.client = {
		    nom: 'SMITH',
		    prenom: 'John'
		  };
		}
]);

angular.module("AppGestiondesContacts").directive('myClient', function() {
    return{
    	templateUrl: 'my-client.html'
        /*restrict:'EA',
        scope:{client:"=personne",onClick:"&ngClick"},
        templateUrl: function(elem, attr){
            return 'client-'+attr.type+'.html';
        }*/
    }
});



