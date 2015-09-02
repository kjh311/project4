angular.module('routerApp', ['routerRoutes', 'ngAnimate'])

.controller('mainController', function() {

  var vm = this;

  vm.bigMessage = 'A smooth sea never made a skilled sailor.';
})

.controller('homeController', function(){

  var vm = this;
  vm.message = 'This is the home page!';
})

// vm.breweries = [
//   { name: 'Golden Road Brewery', rating: 8, distance: '1.3 miles'}

// ];

.controller('breweriesController', function(){

  var vm = this;
  vm.message = 'This is the breweries page';
})

.controller('beerspeakController', function(Beer){

  var vm = this;
  // vm.message = 'This is the Beer Speak Page';
  Beer.all()

    .success(function(data) {

      vm.beer = data;
    });

});


