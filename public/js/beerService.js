angular.module('breweryService', [])

.factory('Brewery', function($http) {

  var breweryFactory = {};

  breweryFactory.get = function(id) {
    return $http.get('/breweries/' + id);
  };

  breweryFactory.create = function(breweryData) {
    return $http.post('/breweries', breweryData);
  };

  breweryFactory.update = function(id, breweryData) {
    return $http.put('https://sandbox-api.brewerydb.com/v2/style/brewery/:breweryId' + '?key=' + beerKey);
  };

  breweryFactory.delete = function(id) {
    return $http.delete('https://sandbox-api.brewerydb.com/v2/style/brewery/:breweryId' + '?key=' + beerKey);
  };

  return breweryFactory;

});
