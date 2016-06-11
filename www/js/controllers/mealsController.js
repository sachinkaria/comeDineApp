comeDineApp.controller('mealsController', ['$http', 'mealsService','$scope','$cordovaGeolocation', '$ionicLoading', '$ionicPlatform',
            function($http, mealsService, $scope, $cordovaGeolocation, $ionicLoading, $ionicPlatform) {

  $scope.index = function(){
    mealsService.all().then(function(response) {
      $scope.meals = response.data;
    });
  };
  $scope.index();
}]);
