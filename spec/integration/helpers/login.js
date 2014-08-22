var LoginPage = require('../pages/login_page');

module.exports = function(username, password) {
  var loginPage = new LoginPage();

  loginPage.visitPage();
  loginPage.login(username, password);
}
