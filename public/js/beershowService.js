angular.module('beershowService', [])

.factory('Beershow', function($http) {

  var beershowFactory = {};


  beershowFactory.get = function(id) {
    return $http.get('/breweries/' + id + '/beers');
  };

  beershowFactory.create = function(breweryData) {
    return $http.post('https://sandbox-api.brewerydb.com/v2/style/beer' + '?key=' + beerKey);
  };

  beershowFactory.update = function(id, breweryData) {
    return $http.put('https://sandbox-api.brewerydb.com/v2/style/brewery/:breweryId' + '?key=' + beerKey);
  };

  beershowFactory.delete = function(id) {
    return $http.delete('https://sandbox-api.brewerydb.com/v2/style/brewery/:breweryId' + '?key=' + beerKey);
  };

  return beershowFactory;

});
