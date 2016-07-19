angular.module('app.controllers', [])

.controller('textCtrl', function($scope) {
  $scope.onDragComplete=function(data,evt){
       console.log("drag success, data:", data);
    }
    $scope.onDropComplete=function(data,evt){
        console.log("drop success, data:", data);
    }
})

.controller('imageCtrl', ['$scope', '$rootScope', '$cordovaCamera', function($scope, $rootScope, $cordovaCamera)  {
    $scope.ready = false;
	$rootScope.images = [];
    $rootScope.buttonDisable = false;
	$rootScope.$watch('appReady.status', function() {
		console.log('watch fired '+$rootScope.appReady.status);
		if($rootScope.appReady.status) $scope.ready = true;
	});

	$scope.selImages = function() {
    $rootScope.buttonDisable = true;
		window.imagePicker.getPictures(
			function(results) {
      for (var i = 0; i < results.length; i++) {
					console.log('Image URI: ' + results[0]);
					$rootScope.images.push(results[0]);
        }
				if(!$rootScope.$$phase) {
					$rootScope.$apply();
				}
			}, function (error) {
				console.log('Error: ' + error);
			}
		);
	};
  $scope.retcap = function() {
    $rootScope.caption
  }
}])

.controller('videoCtrl', function($scope, $cordovaCamera) {
  $scope.pickVideo = function() {

       var options = {

         mediaType: Camera.MediaType.VIDEO,
         sourceType: Camera.PictureSourceType.PHOTOLIBRARY

         };

       $cordovaCamera.getPicture(options).then(function(results) {

       $scope.videoUrl = results;
       for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[0]);
          $rootScope.videos.push(results[0]);
         }
      // alert('$scope.videoUrl: '+ videoUrl);
       });

     };
})

.controller('adCreatorStudioCtrl', function($scope) {

})

.controller('loginCtrl', function ($scope ) {

 })


.controller('signupCtrl', function ($scope) {

})

.controller('welcomeCtrl', function($scope) {

})

.controller('image2Ctrl', function($scope,$rootScope) {

})

.controller('previewCtrl', function($scope,$rootScope) {

})

.controller('adSizeCtrl', function($scope) {

})
