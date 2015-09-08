angular.module('breweryService', [])

.factory('Brewery', function($http) {

  var breweryFactory = {};
  var key = "89b802471ef2d78f3003d97f713ac4c0";
  // var key = process.env.key;

  breweryFactory.get = function(id) {
    return $http.get('/api/breweries/' + id);
  };

  // breweryFactory.get = function(id) {
  //   return $http.get('/api/locations/' + id);
  // };

  breweryFactory.create = function(breweryData) {
    return $http.post('http://api.brewerydb.com/v2/breweries' + '?key=' + key);
  };

  breweryFactory.update = function(id, breweryData) {
    return $http.put('http://api.brewerydb.com/v2/brewery/:breweryId' + '?key=' + key);
  };

  breweryFactory.delete = function(id) {
    return $http.delete('http://api.brewerydb.com/v2/brewery/:breweryId' + '?key=' + key);
  };

  return breweryFactory;

});
