angular.module('routerApp', ['routerRoutes', 'ngAnimate', 'breweryService', 'styleService', 'beershowService'])

.config(['$httpProvider', function($httpProvider) {
      $httpProvider.defaults.useXDomain = true;
      $httpProvider.defaults.headers.common = 'Content-Type: application/json';
      // $httpProvider.defaults.headers.common = ['Access-Control-Allow-Origin'];
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
      delete $httpProvider.defaults.headers.common['Origin'];
   }
])

.controller('mainController', ['$http', '$location', function($http, $location) {

  var vm = this;



vm.message = "main controller";

      vm.breweries = [
  { name: 'Golden Road Brewery', rating: '', city: 'Los Angeles', link: '6RZC0v', twitter: '639862176551845889'},
  { name: 'Angel City Brewery', rating: '', city: 'Los Angeles', link: '0ZIlVA', twitter: '640951744621490177'},
  { name: 'Mumford Brewing', rating: '', city: 'Los Angeles', link: 'pUVZvr', twitter: '641701877881548800'},
  { name: 'Ohana Brewing Co', rating: '', city: 'Los Angeles', link: 'nE0YCy', twitter: '641702346393649152'},
  { name: 'The Dudes Brewing Co', rating: '', city: 'Torrance', link: 'xXJuyA', twitter: '641702654582743040'},
  { name: 'Eagle Rock Brewery', rating: '', city: 'Los Angeles', link: 'aCW7DF', twitter: '641702897973989376'},
  { name: 'Bonaventure Brewing Co.', rating: '', city: 'Los Angeles', link: 'hiPKpK', twitter: '641703179537657856'},
  { name: 'Strand Brewing Co', rating: '', city: 'Los Angeles', link: 'BbSlls', twitter: '641703422312366080'},
  { name: 'El Segundo Brewing Company', rating: '', city: 'El Segundo', link: 'TiJjtj', twitter: '641703793466339328'},
  { name: 'Karl Strauss Brewing Company', rating: '', city: 'Los Angeles', link: 'mtUjck', twitter: '641704168525201409'},
  { name: 'BJs Restaurant and Brewery', rating: '', city: 'Los Angeles', link: 'CJ7aEv', twitter: '641704789055660032'},
  { name: 'Beachwood BBQ & Brewing', rating: '', city: 'Long Beach', link: 'RCXyVC', twitter: '641705045222817792'},
  { name: 'Monkish Brewing Co.', rating: '', city: 'Torrance', link: 'PIwPRT', twitter: '641705270880563200'},
  { name: 'San Pedro Brewing Company', rating: '', city: 'San Pedro', link: 'YBW4h3', twitter: '641705730815324160'},
  { name: 'Three Weavers Brewing Company', rating: '', city: 'Inglewood', link: 'mpfjHg', twitter: '641705929390460928'},
  { name: 'Belmont Brewing Co', rating: '', city: 'Long Beach', link: 'MQVQup', twitter: '641706211885187072'},
  { name: 'Gordon Biersch Brewing', rating: '', city: 'Los Angeles', link: 'P2xdU4', twitter: '641706442991382528'},
  { name: 'Pacific Plate Brewing Co', rating: '', city: 'Pasadena', link: 'g4IkyI', twitter: '641706684482609152'},
  { name: 'Highland Park Brewery', rating: '', city: 'Pasadena', link: 'q8pAoY', twitter: '641706851730460672'},

];

vm.doSearch = function(){
  $http.get('api/search?key=' + beerKey + '&q=' + vm.query).then(function(res){
    console.log(res.data);
    vm.breweries = res;
    $location.path('/searchresults');
  });
}


}])

.controller('homeController', function(){

  var vm = this;
  vm.message = 'This is the home page!';
})



.controller('stylesController', ['Style', '$routeParams', function(Style, $routeParams){
  var vm = this;
  vm.message = 'Styles controller is connected!!';



  Style.get($routeParams.id).then(function(res) {
    console.log(res)
    vm.styles = res;
  });
}])

// .controller('styleController', function(){

//   var vm = this;
//   vm.message = 'style controller works';
// })


.controller('styleController', ['Style', '$routeParams', function(Style, $routeParams){
  var vm = this;
  vm.message = 'Style controller works';

  Style.get($routeParams.id).then(function(res) {
    console.log(res);
    vm.style = res.data;
  });
}])

.controller('beershowController', ['Beershow', '$routeParams', function(Beershow, $routeParams){
  var vm = this;
  vm.message = 'Brewery-beer-show controller works';

  Beershow.get($routeParams.id).then(function(res) {
    console.log(res)
    vm.beershow = res.data;
  });
}])



.controller('breweriesController', function(){

  var vm = this;
  vm.message = 'Breweries controller works';
})


.controller('breweryController', ['Brewery', '$routeParams', function(Brewery, $routeParams){
  var vm = this;
  vm.message = 'Brewery controller works';

  Brewery.get($routeParams.id).then(function(res) {
    console.log(res)
    vm.brewery = res.data;
  });
}])

.controller('NewBreweryController', ['Brewery', function(Brewery) {
  var vm = this;

  vm.name        = "";
  vm.description = "";
  vm.website     = "";
  vm.established = "";

  vm.createBrewery = createBrewery;

  function createBrewery() {
    Brewery.create({
             name:        vm.name,
             description: vm.description,
             website:     vm.website,
             established: vm.established
           })
           .then(
             function(res) {
               alert(res.data.message);
             },
             function(err) {
               alert(err);
           });
  }

}])

.controller('searchController', function($http){

  var vm = this;

  vm.test = function(){
    console.log('working');
  }

  vm.doSearch = function(){
    $http.get('api/search?key=' + beerKey + '&q=' + vm.query).then(function(res){
      console.log(res.data);
      vm.results = res.data;
    });
  }
  // vm.message = 'Breweries controller works';
})


.controller('beerspeakController', function(Beer){

  var vm = this;
  // vm.message = 'This is the Beer Speak Page';
  Beer.all()

    .success(function(data) {

      vm.beer = data;
    });
});





