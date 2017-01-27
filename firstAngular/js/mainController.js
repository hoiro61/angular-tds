angular.module("FirstApp").controller("MainController", function(){
	var message="Hello";
	this.getMsg=function(){
		return message;
	};
});