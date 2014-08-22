var ProfilePage = require('../pages/profile_page'),
    login = require('../helpers/login');

describe('View Profile', function() {
  var profilePage = new ProfilePage();

  describe('when logged in', function() {
    it('has the correct data', function() {
      login('drye', 'danrye11');
      profilePage.visitPage;
      expect(profilePage.email).toEqual('dan.rye@gmail.com');
    });
  });
});
