comeDineApp.controller('mealController', ['mealService','$scope', '$stateParams','tableService', function(mealService, $scope, $stateParams, tableService) {

  $scope.showmeal = function(table_id,id){
    mealService.find(table_id,id).then(function(response) {
      $scope.meal = response.data;
    });
  };

  $scope.showtable = function(table_id){
    tableService.find(table_id).then(function(response) {
      $scope.table = response.data;
    });
  };

  $scope.showmeal($stateParams.table_id,$stateParams.id);
  $scope.showtable($stateParams.table_id);

}]);
