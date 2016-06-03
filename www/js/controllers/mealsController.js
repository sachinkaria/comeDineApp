comeDineApp.controller('mealsController', ['$http', 'mealsService','$scope', function($http, mealsService, $scope) {
  $scope.index = function(){
    mealsService.all().then(function(response) {
      $scope.meals = response.data;
      console.log(response.data);
    });
  };
  $scope.index();
}]);
