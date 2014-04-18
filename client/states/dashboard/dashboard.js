angular.module('dashboard', [
  'ui.bootstrap',
  'ui.router'
])

.config(function($stateProvider) {
  $stateProvider.state('dashboard', {
    url: '/dashboard',
    templateUrl: 'dashboard.html',
    controller: 'dashboard'
  });
})

.controller('dashboard', function($scope) {
  $scope.tabs = [
    { title: "Products", state: '.company.products' },
    { title: "Settings", state: '.settings' }
  ];
});
