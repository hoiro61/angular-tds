angular.module("AppNote").controller("NoteController", function(){
	this.messageNote="";
	var info="";
	var status=1;
	this.clear=function(){
		this.messageNote="";
	};
	this.count=function(){
		return 100-this.messageNote.length;
	};
});
