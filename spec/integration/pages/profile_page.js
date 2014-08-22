'use strict';

function ProfilePage() {}

ProfilePage.prototype = Object.create({}, {
  visitPage: {
    get: function() {
      browser.get('/myprofile');
    }
  },
  email: {
    get: function() {
      return element(by.css('#email')).getAttribute('value');
    }
  }
});

module.exports = ProfilePage;
