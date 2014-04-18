describe('dashboard', function(){
  describe("dashboard controller", function () {
    var $scope, DashboardCtrl;
    beforeEach(module('dashboard'));
    beforeEach(inject(function($controller) {
      $scope = {};
      DashboardCtrl = $controller('dashboard', { $scope: $scope });
    }));
    it('should have an array of at least on tab object', inject(function() {
      expect($scope.tabs.length).toBeGreaterThan(0);
    }));
  });
});
