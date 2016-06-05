comeDineApp.controller('newMealController', [ '$scope','newMealService','$state','userProfileService',
function($scope, newMealService, $state, userProfileService){

  var self = this;
  self.tableId = 0;

  $scope.showTable = function(){
    userProfileService.profile()
      .then(function(response){
        console.log(response.data);
        self.tableId = response.data[0][0].id;
        console.log(self.tableId)
;        $scope.table = response.data[0][0];
      });
  };

  $scope.createMeal = function(meal,tableId){
    console.log(self.tableId);
    newMealService.create(meal,self.tableId)
    .then(function(){
      $state.go('tab.account');
    });
  };

  $scope.showTable();
}]);
