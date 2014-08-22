var LoginPage = require('./pages/login_page');

describe('app', function() {
  var page = new LoginPage();

  describe('signing in with valid credentials', function() {
    Given(function() { page.visitPage() });
    When(function() { page.login('janders', 'password') });
    Then(function() {
      page.getCurrentUser().then(function(text) {
        expect(text).toEqual("James")
      });
    });
  });
});
