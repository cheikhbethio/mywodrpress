

describe('MyWordPress', function() {

  it('should be able to connect as admin', function() {

    browser.get('http://localhost:4711/');

    expect(browser.getLocationAbsUrl()).toMatch("/");
    element(by.id('connection_link')).click();
    expect(browser.getLocationAbsUrl()).toMatch("/connection");

    element(by.model('userCredentials.login')).sendKeys('admin');
    element(by.model('userCredentials.password')).sendKeys('admin');

    element(by.id('connection_button')).click();

    expect(browser.getLocationAbsUrl()).toMatch("http://localhost:4711/#/page/home?connectionSuccess=true");

  });

});