comeDineApp.service('newTableService',['$http', function($http){
  var self = this;
  self.AlertMessage = false;
  
  self.create = function(table) {
    return $http.post('http://localhost:3000/tables.json', table).success(function(data){
    });
  };

}]);
