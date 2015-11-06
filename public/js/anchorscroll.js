angular.module('myApp', ['duScroll'])
  .value('duScrollDuration', 2000)
  .value('duScrollOffset', 530)
  .controller('stylesController', function($scope, $document) {


    // var someElement = angular.element(document.getElementById('some-id'));
    // $document.scrollToElementAnimated(someElement);
  }
);
