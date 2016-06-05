comeDineApp.controller('DashCtrl', function($scope) {})

comeDineApp.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

comeDineApp.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
  


});
