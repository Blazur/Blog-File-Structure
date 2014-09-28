angular.module('starter', [
  'ionic',
  'starter.services',
  'starter.controllers'
])


.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // the pet tab has its own child nav-view and history
  .state('tab.pet-index', {
    url: '/pets',
    views: {
      'pets-tab': {
        templateUrl: 'templates/pet-index.html',
        controller: 'PetIndexCtrl'
      }
    }
  })

  .state('tab.pet-detail', {
    url: '/pet/:petId',
    views: {
      'pets-tab': {
        templateUrl: 'templates/pet-detail.html',
        controller: 'PetDetailCtrl'
      }
    }
  })

  .state('tab.adopt', {
    url: '/adopt',
    views: {
      'adopt-tab': {
        templateUrl: 'templates/adopt.html'
      }
    }
  })

  .state('tab.about', {
    url: '/about',
    views: {
      'about-tab': {
        templateUrl: 'templates/about.html'
      }
    }
  });

  $urlRouterProvider.otherwise('/tab/pets');

});

