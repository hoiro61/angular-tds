angular.module("AppGestiondesContacts").
controller("contactsController", function(){
	
	var self = this;
    self.afficherboutonannulersuppression = false;
    self.frmContact = 0;
    self.contactElem={};
    self.contactElem2={};
    self.elemFiltre="";
    self.indiceElemaModif=0;
	
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

    self.modifierContact = function (client) {
        angular.copy(client, self.contactElem);
        self.indiceElemaModif = self.clients.indexOf(client);
        self.frmContact = 1;
    };

    self.updateContact = function () {
        if (self.verifClient(self.contactElem)==true) {
            angular.copy(self.contactElem, self.clients[self.indiceElemaModif]);
            self.indiceElemaModif = 0;
            self.frmContact = 0;
        }
    };

    self.ajouterContact = function () {
        if (self.verifClient(self.contactElem2)==true) {
            self.contactElem2.deleted = false;
            self.clients.push(self.contactElem2);
            self.contactElem2 = {};
            self.frmContact = 0;
        };
    };

    self.verifClient = function (client) {
        if (client.nom==null || client.nom==""){
            return false;
        }
        else if (client.mail==null || client.mail==""){
            return false;
        }
        else {
            self.re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return self.re.test(client.mail);
        }

    };

		}
);

angular.module("AppGestiondesContacts").filter('noDeleted', function(){
    return function(input){
    	self.tab=[];
        angular.forEach(input, function(contact, key) {
            if (contact.deleted==false){
                self.tab.push(contact);
            };
        });
        return tab;
    };
});

angular.module("AppGestiondesContacts").filter('recherche', function(){
    return function(input, elemFiltre){
        self.tab2=[];
        if (elemFiltre=="" || elemFiltre==null){
           return input;
        }
        else {
            angular.forEach(input, function (contact, key) {
                self.position = contact.nom.search(new RegExp(elemFiltre, "i"));
                self.position2 = contact.prenom.search(new RegExp(elemFiltre, "i"));
                self.position3 = contact.mail.search(new RegExp(elemFiltre, "i"));
                if (self.position!=-1||self.position2!=-1||self.position3!=-1) {
                    self.tab2.push(contact);
                }
            });
            return self.tab2;
        };
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



