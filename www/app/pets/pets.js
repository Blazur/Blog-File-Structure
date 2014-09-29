angular.module('app.pets', [
  'app.pets.details'
])

.config(function($stateProvider) {
  $stateProvider
  .state('tab.pet-index', {
    url: '/pets',
    views: {
      'pets-tab': {
        templateUrl: 'app/pets/pets.html',
        controller: 'PetIndexCtrl'
      }
    }
  });
})

.controller('PetIndexCtrl', function($scope, PetService) {
  $scope.pets = PetService.all();
});