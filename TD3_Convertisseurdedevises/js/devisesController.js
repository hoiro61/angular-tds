angular.module("AppConvertisseurdedevises").
controller("devisesController", ['$http', function(http) {
	
	var self = this;
	self.from="";
	self.to="";
	self.what="";
	self.currencies={};
	self.result=0;
	
	
	http.get('app/data/currencymap.json').
    then(function(response) {
        self.currencies = response.data;
    },
    function(response) {
        console.log("Erreur avec le statut Http : "+response.status);
    });
	
	self.getResult = function () {
		http.jsonp('https://free.currencyconverterapi.com/api/v3/convert?compact=y&q='+self.from.code+'_'+self.to.code, {jsonpCallbackParam: 'callback'})
		.then(function(response) {
		        self.result=response.data[self.from.code+'_'+self.to.code].val;
		});
    };
    
    self.swap = function () {
    	self.temp = self.from;
		self.from = self.to;
		self.to = self.temp;
    };
	
		}
]);