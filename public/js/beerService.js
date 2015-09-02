angular.module('breweryService', [])

.factory('Brewery', function($http) {

  var breweryFactory = {};

  breweryFactory.get = function(id) {
    return $http.get('http://api.brewerydb.com/v2/brewery/:breweryId');
  };

  breweryFactory.create = function(breweryData) {
    return $http.post('http://api.brewerydb.com/v2/breweries');
  };

  breweryFactory.update = function(id, breweryData) {
    return $http.put('http://api.brewerydb.com/v2/brewery/:breweryId');
  };

  breweryFactory.delete = function(id) {
    return $http.delete('http://api.brewerydb.com/v2/brewery/:breweryId');
  };

  return breweryFactory;

});
