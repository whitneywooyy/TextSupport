var app = angular.module('textSupportApp', ['firebase', 'ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: "js/home/home.html",
		controller: "homeCtrl"
	})
	.when('/support', {
		templateUrl: "js/support/support.html",
		controller: "supportCtrl"
	})
	.otherwise({
		redirectTo: "/"
	})

}) 