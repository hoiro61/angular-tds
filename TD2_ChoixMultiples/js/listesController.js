    angular.module("ApplistesChoix")
        .controller("listesChoix", ['$http', function(http) {
        	
            var self = this;
            self.dispoItems=[];
            self.includedItems=[];
            self.selectedDispoItems=[];
            self.selectedIncludedItems=[];
            
            //Récupère la liste des choix disponibles dans le fichier dispoItems.json
			http.get("dispoItems.json").then(function(response) {
			    self.dispoItems=response.data; 
			});
			
			//Pour ajouter des sites à la liste des sites choisis
			self.addToIncluded = function(){
				angular.forEach(self.selectedDispoItems, function(value, key){
		    		self.dispoItems.splice(value, 1);
		    		self.includedItems.splice(0, 0, value);
		    	});
			};
			
			//Ajoute tous les éléments de la liste
			self.addAllToIncluded = function(){
				self.includedItems=self.dispoItems;
				self.dispoItems=[];
			};
			
			//Pour retirer des sites à la liste des sites choisis
			self.removeFromIncluded = function(){
				angular.forEach(self.selectedIncludedItems, function(value, key){
					self.includedItems.splice(value, 1);
		    		self.dispoItems.splice(0, 0, value);
		    	});
			};
			
			//retire tous les éléments de la liste des sites choisis
			self.removeAllFromIncluded = function(){
				self.dispoItems=self.includedItems;
				self.includedItems=[];
			};

        }]);