    angular.module("ApplistesChoix")
        .controller("listesChoix", ['$http', function(http) {
        	
            var self = this;
            self.dispoItems=[];
            self.includedItems=[];
            self.selectedDispoItems=[];
            self.selectedIncludedItems=[];
            self.step=1;
            
            //Récupère la liste des choix disponibles dans le fichier dispoItems.json
			http.get("dispoItems.json").then(function(response) {
			    self.dispoItems=response.data; 
			});
			
			//Pour ajouter des sites à la liste des sites choisis
			self.addToIncluded = function(){
				angular.forEach(self.selectedDispoItems, function(value){
                    indice = self.dispoItems.indexOf(value);
                    self.includedItems.push(self.dispoItems[indice]);
                    self.dispoItems.splice(indice, 1);
		    	});
			};
			
			//Ajoute tous les éléments de la liste
			self.addAllToIncluded = function(){
                self.selectedDispoItems=self.dispoItems;
                self.addToIncluded();
                self.addToIncluded();
                self.addToIncluded();
                self.selectedDispoItems=[];
			};
			
			//Pour retirer des sites à la liste des sites choisis
			self.removeFromIncluded = function(){
				angular.forEach(self.selectedIncludedItems, function(value){
                    indice = self.includedItems.indexOf(value);
                    self.dispoItems.push(self.includedItems[indice]);
                    self.includedItems.splice(indice, 1);
		    	});
			};
			
			//retire tous les éléments de la liste des sites choisis
			self.removeAllFromIncluded = function(){
                self.selectedIncludedItems=self.includedItems;
                self.removeFromIncluded();
                self.removeFromIncluded();
                self.removeFromIncluded();
                self.selectedIncludedItems=[];
			};

            self.nbproduit = function () {
                var compt = 0;
                angular.forEach(self.includedItems, function(service, key) {
					compt = compt + 1;
                });
                return compt;
            };

            self.nexstep = function () {
                var compt = 0;
                angular.forEach(self.includedItems, function(service, key) {
                    compt = compt + 1;
                });
                if (compt!=0){
                	self.step=2;
				};
            };

            self.previousstep = function () {
				self.step=1;
            };

        }]);