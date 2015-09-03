angular.module('routerRoutes', ['ngRoute'])

  .config(function($routeProvider, $locationProvider) {
    $routeProvider

    .when('/', {
      templateUrl  : 'views/pages/home.html',
      controller   : 'homeController',
      controllerAs : 'home'
  })

      .when('/styles', {
      templateUrl  : 'views/pages/styles.html',
      controller   : 'stylesController',
      controllerAs : 'styles'
  })

    .when('/breweries', {
      templateUrl  : 'views/pages/breweries.html',
      controller   : 'breweriesController',
      controllerAs : 'breweries'
  })

    .when('/beerspeak', {
      templateUrl  : 'views/pages/beerspeak.html',
      controller   : 'beerspeakController',
      controllerAs : 'beerspeak'
  });

  $locationProvider.html5Mode(true);

})
