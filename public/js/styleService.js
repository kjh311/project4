angular.module('styleService', [])

.factory('Style', function($http) {

  var styleFactory = {};

  //  styleService.get = function() {
  //   return $http.get('/api/styles/').then(function(res) {
  //     console.log('request completed!');
  //     return res.data;
  //   });
  // }

  styleFactory.get = function(id) {
    return $http.get('/api/styles/' + id).then(function(res) {
      console.log('request completed!');
      console.log(res.data[0].name);
      // var one = res.data[0].name;
      return res.data;
    });
  }

  return styleFactory;

});
