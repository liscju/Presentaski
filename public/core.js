// public/core.js
var myApp = angular.module('myApp', []);

myApp.controller('MainPresentationController',function ($scope, $http) {
    $scope.greeting = "Witaj uzytkowniku"
});
