angular.module('beerService', [])

.factory('Beer', function($http) {

  var beerFactory = {};
  var key = "89b802471ef2d78f3003d97f713ac4c0";

  beerFactory.get = function(id) {
    return $http.get('/api/brewery/' + id + 'beers');
  };

  beerFactory.create = function(breweryData) {
    return $http.post('http://api.brewerydb.com/v2/brewery' + '?key=' + key);
  };

  beerFactory.update = function(id, breweryData) {
    return $http.put('http://api.brewerydb.com/v2/brewery/:breweryId' + '?key=' + key);
  };

  beerFactory.delete = function(id) {
    return $http.delete('http://api.brewerydb.com/v2/brewery/:breweryId' + '?key=' + key);
  };

  return beerFactory;

});
