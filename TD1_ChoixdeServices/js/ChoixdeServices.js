    angular.module("AppChoixdeServices")
        .controller("ChoixdeServices", ['$http', function(http) {
        	
            var self = this;
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
        }]);