angular.module("MainModule").controller("MainController",["code",function($routeParams,code){
    this.content1="Contenu du template de route1";
    this.code=code;
}]);