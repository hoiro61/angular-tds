angular.module("AppNote").controller("MainController", function(){
	var message="Hello";
	this.getMsg=function(){
		return message;
	};
});