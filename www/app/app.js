angular.module('app', [
  'ionic',
  'app.services',
  'app.pets',
  'app.adopt',
  'app.about'
])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'app/app.html'
  });

  $urlRouterProvider.otherwise('/tab/pets');

});