app.factory('httpService', ['$http', function($http) {

  var service = {};
  service.get = function(data) {
    return $http.get('https://api.github.com/users/' + data);
  };
  return service;
}]);