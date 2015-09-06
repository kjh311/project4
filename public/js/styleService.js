angular.module('styleService', [])

.factory('Style', function($http) {

  var styleService = {};
  var key = "89b802471ef2d78f3003d97f713ac4c0";

  styleService.get = function(id) {
    return $http.get('/api/breweries/' + id);
  };


  return styleService;

});
