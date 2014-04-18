describe('/dashboard', function() {
  beforeEach(function() {
    browser.get('#/dashboard');
  });

  describe('tabs', function() {
    var tabs;
    beforeEach(function() { 
      tabs = element.all(by.repeater('tab in tabs'));
    });

    describe('first tab', function () {
      it('title is "Products"', function () {
        expect(tabs.first().getText()).toEqual('Products');
      });
    });
    describe('second tab', function () {
      it('title is "Settings"', function () {
        expect(tabs.get(1).getText()).toEqual('Settings');
      });
    });
  });
});
