comeDineApp.controller('tablesController', ['$http', 'tablesService','$scope','$cordovaGeolocation', '$ionicLoading', '$ionicPlatform',
function($http, tablesService, $scope, $cordovaGeolocation, $ionicLoading, $ionicPlatform) {

  $scope.index = function(){
    tablesService.all().then(function(response) {
      $scope.tables = response.data;
      console.log($scope.tables);
    });
  };

  $scope.index();

}]);
