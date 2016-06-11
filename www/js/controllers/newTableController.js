comeDineApp.controller('newTableController', [ '$scope','newTableService','$state','$window',
function($scope, newTableService, $state, $window){

  $scope.createTable = function(table){
    newTableService.create(table)
    .then(function(){
      $state.go('tab.account', {}, { reload: true });
    });
  };
}]);
