angular.module('app.controllers', [])

.controller('textCtrl', function($scope) {

})

.controller('imageCtrl', ['$scope', '$rootScope', '$cordovaCamera', function($scope, $rootScope, $cordovaCamera,$ionicActionSheet)  {
  $scope.showActionsheet = function() {

    $ionicActionSheet.show({
      titleText: 'ActionSheet Example',
      buttons: [
        { text: '<i class="icon ion-share"></i> Share' },
        { text: '<i class="icon ion-arrow-move"></i> Move' },
      ],
      destructiveText: 'Delete',
      cancelText: 'Cancel',
      cancel: function() {
        console.log('CANCELLED');
      },
      buttonClicked: function(index) {
        console.log('BUTTON CLICKED', index);
        return true;
      },
      destructiveButtonClicked: function() {
        console.log('DESTRUCT');
        return true;
      }
    });
  };
  $scope.ready = false;
	$scope.images = [];
 $scope.buttonDisable = false;
	$rootScope.$watch('appReady.status', function() {
		console.log('watch fired '+$rootScope.appReady.status);
		if($rootScope.appReady.status) $scope.ready = true;
	});

	$scope.selImages = function() {
    $scope.buttonDisable = true;
		window.imagePicker.getPictures(
			function(results) {
      for (var i = 0; i < results.length; i++) {
					console.log('Image URI: ' + results[0]);
					$scope.images.push(results[0]);
        }
				if(!$scope.$$phase) {
					$scope.$apply();
				}
			}, function (error) {
				console.log('Error: ' + error);
			}
		);

	};
}])

.controller('videoCtrl', function($scope) {

})

.controller('adCreatorStudioCtrl', function($scope) {

})

.controller('loginCtrl', function($scope) {

})

.controller('signupCtrl', function($scope) {

})

.controller('welcomeCtrl', function($scope) {

})

.controller('image2Ctrl', function($scope) {

})

.controller('previewCtrl', function($scope) {

})

.controller('adSizeCtrl', function($scope) {

})
