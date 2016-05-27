comeDineApp.controller('mealController', ['mealService','$scope', '$stateParams', function(mealService, $scope, $stateParams) {
  $scope.show = function(table_id,id){
    mealService.find(table_id,id).then(function(response) {
      $scope.meal = response.data;
    });
  };
  $scope.show($stateParams.table_id,$stateParams.id);
}]);
