comeDineApp.controller('newMealController', [ '$scope','newMealService','$state','userProfileService',
function($scope, newMealService, $state, userProfileService){

  var self = this;
  self.tableId = 0;

  $scope.showTable = function(){
    userProfileService.profile()
      .then(function(response){
        self.tableId = response.data[0][0].id;
        $scope.table = response.data[0][0];
      });
  };

  $scope.createMeal = function(meal,tableId){
    newMealService.create(meal,self.tableId)
    .then(function(){
      $state.go('tab.account', {}, { reload: true});
    });
  };

  $scope.showTable();
}]);
