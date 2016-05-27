comeDineApp.service('tableService', ['$http', function($http) {
  this.find = function(table_id){
      return $http.get('http://localhost:3000/tables/' + table_id);
    };
}]);
