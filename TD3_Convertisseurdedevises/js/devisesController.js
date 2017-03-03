angular.module("AppConvertisseurdedevises").
controller("devisesController", ['$http', function(http) {
	
	var self = this;
	self.selected="";
	self.currencies={};
	
	
	http.get('app/data/currencymap.json').
    then(function(response) {
        self.currencies = response.data;
    },
    function(response) {
        console.log("Erreur avec le statut Http : "+response.status);
    });
	
		}
]);