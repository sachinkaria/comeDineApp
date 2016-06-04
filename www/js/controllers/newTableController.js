comeDineApp.controller('newTableController', [ '$scope','newTableService','$state',
function($scope, newTableService, $state){


  $scope.createTable = function(table){
    newTableService.create(table)
    .then(function(){
      $state.go('tab.account');
    });
  };
}]);
