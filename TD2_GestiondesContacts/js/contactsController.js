angular.module("AppGestiondesContacts").
controller("contactsController", [ function(){
	
	var self = this;
    self.afficherboutonannulersuppression = false;
	
	self.clients =
			[
			 {
		    nom: 'SMITH',
		    prenom: 'John',
		    adresse: '20 rue du test',
		    ville: 'Ville du test',
		    cp: '77880',
		    mail: 'johnsmith@hotmail.fr',
                 deleted:false
			 },
			 {
		    nom: 'GATES',
		    prenom: 'Bill',
		    adresse: '21 rue du test',
		    ville: 'Ville du test',
		    cp: '77880',
		    mail: 'bill@microsoft.com',
                 deleted:false
			 },
			 {
		    nom: 'JOBS',
		    prenom: 'Steeve',
		    adresse: '20 rue du test',
		    ville: 'Ville du test',
		    cp: '77880',
		    mail: 'Steeve@apple.com',
                 deleted:false
			 }
		    	];
	
		self.nbcontact = function (val) {
		    var compt = 0;
		    angular.forEach(self.clients, function(client, key) {
                if (client.deleted==val){
                    compt = compt + 1;
                };
		    });
		    return compt;
		};

    self.restaurerContact = function () {
        angular.forEach(self.clients, function(client, key) {
            if (client.deleted==true){
                client.deleted=false;
            };
        });
        self.afficherboutonannulersuppression = false;
    };

    self.supprimerContact = function (client) {
        indice = self.clients.indexOf(client);
        self.clients[indice].deleted=true;
        self.afficherboutonannulersuppression = true;
    };

		}
]);

angular.module("AppGestiondesContacts").filter('noDeleted', function(){
    return function(input, symbol){
    	self.tab=[];
        angular.forEach(input, function(contact, key) {
            if (contact.deleted==false){
                self.tab.push(contact);
            };
        });
        return tab;
    };
});

angular.module("AppGestiondesContacts").directive('myClient', function() {
    return{
    	restrict: 'AE',
    	 templateUrl: function(elem, attr){
             return 'client-'+attr.type+'.html';
    	 }
    }
});



