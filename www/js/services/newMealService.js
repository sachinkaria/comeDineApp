comeDineApp.service('newMealService',['$http', function($http){
  var self = this;

  self.create = function(meal,tableId) {
    return $http.post('http://localhost:3000/tables/' + tableId + '/meals.json', meal).success(function(data){
    });
  };

}]);
