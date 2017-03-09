angular.module("AppConvertisseurdedevises").
controller("devisesController", ['$http', function(http) {
	
	var self = this;
	self.from="";//Monnaie de base
	self.to="";//Monnaie dans laquelle on convertit
	self.what="";//La somme à convertir
	self.currencies={};//tableau des différents taux en vigueur
	self.result=0;//résultat de la conversion
	self.historique=[];//historique des conversions réalisées
	self.histo=false;//designe si on souhaite voir l'historique ou non
    self.taux=0;
	
	
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
            self.taux=response.data[self.from.code+'_'+self.to.code].val;
            self.result=self.taux*self.what;
            self.elemModif=0;
            angular.forEach(self.historique, function(transaction, key) {
                if (transaction.from==self.from.code&&transaction.to==self.to.code&&transaction.what==self.what){
                    self.elemModif=1;
                    transaction.amount = self.result;
                    transaction.rate = self.taux;
                    transaction.delta = transaction.amount - transaction.initialAmount;
                    transaction.date = new Date();
                };
            });

            if (self.elemModif==0){
                //Mise à jour des conversions
                self.conversion={from : self.from.code,
                to : self.to.code,
                amount : self.result,//retourne le montant (tx* somme) },
                initialAmount : self.result, //Retoune le montant avec tx initial * somme},
                delta : 0,//écart Avec première requête (tx actuel - tx initial) * somme
                rate : self.taux,//tx actuel,
                what : self.what,
                date : new Date(),//date & heure de la requête,
                //update: //Flag pour "en cours de mise à jour" (requête ajax),
                initialRate : self.taux//tx initial  : invariant depuis la première requête
                };
                self.historique.push(self.conversion);
            };

		});
    };
    
    self.swap = function () {
    	self.temp = self.from;
		self.from = self.to;
		self.to = self.temp;
    };
	
		}
]);