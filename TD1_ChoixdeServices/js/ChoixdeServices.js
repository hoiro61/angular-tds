    angular.module("AppChoixdeServices")
        .controller("ChoixdeServices", ['$http', function(http) {
        	
            var self = this;
            self.codeRemise="";
            self.affichageRemise=false;
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

            http({
                method: 'GET',
                url: 'promo.json'
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available

            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });


        }]);