angular.module('app', [
  'ionic',
  'app.pets',
  'app.adopt',
  'app.about',
  'app.services'
])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'app/app.html'
  })

  $urlRouterProvider.otherwise('/tab/pets');

});

