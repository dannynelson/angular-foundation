angular.module('app', [
  // states
  'dashboard'
])

.config(function($httpProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/dashboard');
});
