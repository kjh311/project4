angular.module('routerApp', ['routerRoutes', 'ngAnimate'])

.controller('mainController', function() {

  var vm = this;

  vm.bigMessage = 'A smooth sea never made a skilled sailor.';
})

.controller('homeController', function(){

  var vm = this;
  vm.message = 'This is the home page!';
})

.controller('breweriesController', function(){

  var vm = this;
  vm.message = 'This is the breweries page';
})

.controller('beerspeakController', function(){

  var vm = this;
  vm.message = 'This is the Beer Speak Page';

});


