angular.module('app.controllers', [])

.controller('textCtrl', function($scope) {

})

.controller('imageCtrl',['$scope', '$rootScope', '$cordovaCamera', function($scope, $rootScope, $cordovaCamera) {
  $scope.ready = false;
  $scope.images = [];

  $rootScope.$watch('appReady.status', function() {
    console.log('watch fired '+$rootScope.appReady.status);
    if($rootScope.appReady.status) $scope.ready = true;
  });

  $scope.selImages = function() {

    window.imagePicker.getPictures(
      function(results) {
        for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
          $scope.images.push(results[i]);
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
