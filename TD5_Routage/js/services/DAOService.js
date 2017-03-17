angular.module("MainModule").service("DAOService", ["$http,
    function(http) {
    	var self = this;
		
		self.getClients = function(){
			//Récupère la liste des choix disponibles dans le fichier dispoItems.json
			http.get("clients.json").then(function(response) {
			    self.clients=response.data;
				return self.clients;
			});
	    	});
		};
		
		self.getProducts = function(){
			http.get("products.json").then(function(response) {
			    self.products=response.data; 
			    return self.products;
			});
	    	});
		};
    }
]);
