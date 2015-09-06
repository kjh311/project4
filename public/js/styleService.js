angular.module('styleService', [])

.factory('Style', function($http) {

  var styleService = {};
  var key = "89b802471ef2d78f3003d97f713ac4c0";

   styleService.get = function() {
    return $http.get('/api/styles/').then(function(res) {
      console.log('request completed!');
      return res.data;
    });
  }

  styleService.get = function(id) {
    return $http.get('/api/styles/' + id).then(function(res) {
      console.log('request completed!');
      return res.data;
    });
  }



  return styleService;

});
