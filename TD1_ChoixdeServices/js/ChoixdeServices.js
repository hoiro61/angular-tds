    angular.module("AppChoixdeServices")
        .controller("ChoixdeServices", ['$http', function(http) {
        	
            var self = this;
            self.codeRemise="";
            self.affichageRemise=false;
            self.montantRemise = 0;
            self.totalAvecRemise = 0;
            self.promoError = true;
            self.services =
            	[
            	    {
            	        "name": "Web Development",
            	        "price": 300,
            	        "active":true
            	    },{
            	        "name": "Design",
            	        "price": 400,
            	        "active":false
            	    },{
            	        "name": "Integration",
            	        "price": 250,
            	        "active":false
            	    },{
            	        "name": "Formation",
            	        "price": 220,
            	        "active":false
            	    }
            	]
            
            self.toggleActive = function (service) {
            	service.active= !service.active;
            };
            
            self.total = function () {
            	var compt = 0;
            	angular.forEach(self.services, function(service, key) {
            			if (service['active']==true){
            				compt = compt + service['price'];
            			}
            		});
            	return compt;
            };
            
            self.nbservices = function () {
            	var compt = 0;
            	angular.forEach(self.services, function(service, key) {
            			if (service['active']==true){
            				compt = compt + 1;
            			}
            		});
            	if (compt==0){
            		return "Aucun service sélectionné";
            	}
            	else if (compt==1){
            		return compt+" service sélectionné";
            	}
            	else {
            		return compt+" services sélectionnés";
            	}
            };

			self.remise = function(){
				if (self.codeRemise!=""){
                    self.affichageRemise = !self.affichageRemise;
				}
				else{
                    self.affichageRemise=false;
				}
			}

			  this.promoExiste = function(){
					http.get("promo.json").then(function(response) {
						self.promoError = true;
				    	angular.forEach(response.data, function(value, key){
				    		if(self.codeRemise == key) {
				    			self.montantRemise = self.total()*value;
				    			self.totalAvecRemise = self.total()-self.montantRemise;
				    			self.promoError = false;
				    		}
				    	});    
				    });
			    }

        }]);