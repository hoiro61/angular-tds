angular.module("AppGestiondesContacts").
controller("contactsController", [ function(){
	
	var self = this;
	
	self.clients =
			[
			 {
		    nom: 'SMITH',
		    prenom: 'John',
		    adresse: '20 rue du test',
		    ville: 'Ville du test',
		    cp: '77880',
		    mail: 'johnsmith@hotmail.fr'
			 },
			 {
		    nom: 'GATES',
		    prenom: 'Bill',
		    adresse: '21 rue du test',
		    ville: 'Ville du test',
		    cp: '77880',
		    mail: 'bill@microsoft.com'
			 },
			 {
		    nom: 'JOBS',
		    prenom: 'Steeve',
		    adresse: '20 rue du test',
		    ville: 'Ville du test',
		    cp: '77880',
		    mail: 'Steeve@apple.com'
			 }
		    	];
	
		self.nbcontact = function () {
		    var compt = 0;
		    angular.forEach(self.clients, function(client, key) {
				compt = compt + 1;
		    });
		    return compt;
		};
		
		
		
		}
]);

angular.module("AppGestiondesContacts").directive('myClient', function() {
    return{
    	restrict: 'AE',
    	 templateUrl: function(elem, attr){
             return 'client-'+attr.type+'.html';
    	 }
    }
});



