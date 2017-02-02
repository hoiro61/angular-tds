//angular.module("AppNote").controller("NoteController", function(){
//	var self=this;
//	this.messageNote="";
    angular.module("AppNote", ['ngCookies'])
        .controller("NoteController", ['$cookies', function($cookies) {
            var self=this;
        	self.info="";
            var recupval = $cookies.get("notesav");
            self.messageNote = recupval || "";
            var status = 1;
            self.clear = function () {
                self.messageNote = "";
                self.status=0;
            };
            self.save = function () {
                if(self.messageNote != ""){
                    self.info = "Note sauvegardée";
                    $cookies.put("notesav",self.messageNote);
                }
            };
            self.count = function () {
                var calculcount = 100 - self.messageNote.length;
                if (calculcount<50){
                    self.status=2;
                }
                else if (calculcount<20){
                    self.status=3;
                }
                return calculcount;
            };
        }]);
//});