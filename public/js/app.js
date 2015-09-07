angular.module('routerApp', ['routerRoutes', 'ngAnimate', 'breweryService', 'styleService', 'beershowService'])

.config(['$httpProvider', function($httpProvider) {
      $httpProvider.defaults.useXDomain = true;
      $httpProvider.defaults.headers.common = 'Content-Type: application/json';
      // $httpProvider.defaults.headers.common = ['Access-Control-Allow-Origin'];
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
      delete $httpProvider.defaults.headers.common['Origin'];
   }
])

.controller('mainController', function() {

  var vm = this;




vm.message = "main controller";

      vm.breweries = [
  { name: 'Golden Road Brewery', rating: '', city: 'Los Angeles', link: '6RZC0v', twitter: '639862176551845889', hash: '#goldenroadbrew'},
  { name: 'Angel City Brewery', rating: '', city: 'Los Angeles', link: '0ZIlVA', twitter: '640951744621490177'},
  { name: 'Mumford Brewing', rating: '', city: 'Los Angeles', link: 'pUVZvr', twitter: '639862176551845889'},
  { name: 'Ohana Brewing Co', rating: '', city: 'Los Angeles', link: 'nE0YCy', twitter: '639862176551845889'},
  { name: 'The Dudes Brewing Co', rating: '', city: 'Torrance', link: 'xXJuyA', twitter: '639862176551845889'},
  { name: 'Eagle Rock Brewery', rating: '', city: 'Los Angeles', link: 'aCW7DF', twitter: '639862176551845889'},
  { name: 'Bonaventure Brewing Co.', rating: '', city: 'Los Angeles', link: 'hiPKpK', twitter: '639862176551845889'},
  { name: 'Strand Brewing Co', rating: '', city: 'Los Angeles', link: 'BbSlls', twitter: '639862176551845889'},
  { name: 'El Segundo Brewing Company, LLC', rating: '', city: 'El Segundo', link: 'TiJjtj', twitter: '639862176551845889'},
  { name: 'Karl Strauss Brewing Company', rating: '', city: 'Los Angeles', link: 'mtUjck', twitter: '639862176551845889'},
  { name: 'BJs Restaurant and Brewery', rating: '', city: 'Los Angeles', link: 'CJ7aEv', twitter: '639862176551845889'},
  { name: 'Beachwood BBQ & Brewing', rating: '', city: 'Long Beach', link: 'RCXyVC', twitter: '639862176551845889'},
  { name: 'Monkish Brewing Co.', rating: '', city: 'Torrance', link: 'PIwPRT', twitter: '639862176551845889'},
  { name: 'San Pedro Brewing Company', rating: '', city: 'San Pedro', link: 'YBW4h3', twitter: '639862176551845889'},
  { name: 'Three Weavers Brewing Company', rating: '', city: 'Inglewood', link: 'mpfjHg', twitter: '639862176551845889'},
  { name: 'Belmont Brewing Co', rating: '', city: 'Long Beach', link: 'MQVQup', twitter: '639862176551845889'},
  { name: 'Gordon Biersch Brewing', rating: '', city: 'Los Angeles', link: 'P2xdU4', twitter: '639862176551845889'},
  { name: 'Pacific Plate Brewing Co.', rating: '', city: 'Pasadena', link: 'g4IkyI', twitter: '639862176551845889'},
  { name: 'Highland Park Brewery', rating: '', city: 'Pasadena', link: 'q8pAoY', twitter: '639862176551845889'},

];






 // vm.styles = [
 //    { style: 'American IPA', rating: ''}
 //  ];

})

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
  vm.message = 'Brewerybeershow controller works';

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


.controller('beerspeakController', function(Beer){

  var vm = this;
  // vm.message = 'This is the Beer Speak Page';
  Beer.all()

    .success(function(data) {

      vm.beer = data;
    });
});





