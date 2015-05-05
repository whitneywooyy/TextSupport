var app = angular.module('textSupportApp');

app.controller('supportCtrl', function($scope, supportService, $firebaseObject){

	$scope.ref = supportService.url;
	$scope.sync = $firebaseObject($scope.ref);
	// console.log("$scope.ref", $scope.ref);
	$scope.sync.$bindTo($scope, 'texts').then(function(){
		console.log("texts", $scope.texts);
		// for (var key in $scope.texts) {
		// 	$scope.textsData = $scope.texts[key];
		// 	for (var kay in $scope.textsData) {
		// 		$scope.textsDataDetails = $scope.textsData[kay];
		// 	}
	});
	

	// console.log("$scope.getData", $scope.getData);
	// $scope.sync.$loaded()
	// 	.then(function(){
	// 		console.log("$scope.sync", $scope.sync);
	// 	})
	// 	.catch(function(err){
	// 		console.log(err);
	// 	})

});	// End app.controller