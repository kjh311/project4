angular.module('breweryService', [])

.factory('Brewery', function($http) {

  var breweryFactory = {};

  breweryFactory.get = function(id) {
    return $http.get('/api/breweries/' + id);
  };

  breweryFactory.create = function(breweryData) {
    return $http.post('http://api.brewerydb.com/v2/breweries' + '?key=' + beerKey);
  };

  breweryFactory.update = function(id, breweryData) {
    return $http.put('http://api.brewerydb.com/v2/brewery/:breweryId' + '?key=' + beerKey);
  };

  breweryFactory.delete = function(id) {
    return $http.delete('http://api.brewerydb.com/v2/brewery/:breweryId' + '?key=' + beerKey);
  };

  return breweryFactory;

});
