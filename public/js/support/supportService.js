var app = angular.module('textSupportApp');

app.service('supportService', function(fb){

	// this.getData = function(){
	this.url = new Firebase('https://twilio-thing.firebaseio.com/numbers');
	// 	console.log('ref', ref);
	// 	return $firebaseObject(ref);
	// };

});	// End app.service