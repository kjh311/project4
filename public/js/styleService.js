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
      document.getElementById('spinner').style.display = "none";
      return res.data;
    });
  }



  return styleFactory;

});
