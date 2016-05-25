angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('mealsController', ['$http', 'mealsService','$scope', function($http, mealsService, $scope) {
  $scope.index = function(){
    mealsService.all().then(function(response) {
      $scope.meals = response.data;
    });
  };
  $scope.index();
}])

.controller('mealController', ['mealService','$scope', '$stateParams', function(mealService, $scope, $stateParams) {
  $scope.show = function(table_id,id){
    mealService.find(table_id,id).then(function(response) {
      $scope.meal = response.data;
    });
  };
  $scope.show($stateParams.table_id,$stateParams.id);
}])

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
