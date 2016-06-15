describe("app", function() {

  var list = $$('#meal-link');

  // it("should get home page title", function() {
  //   browser.get('/');
  //   expect(browser.getTitle()).toEqual("Welcome");
  // });

  beforeEach(function(){
    browser.get('/www/');
    $('#email').sendKeys('sachin@sachin.com');
    $('#password').sendKeys('sachinkaria');
    $('#sign-in').click();
    // browser.pause();
  });

  afterEach(function(){
   $('#account').click();
   $('#sign-out').click();
 });

 it('successfully signs in and is redirected', function(){
   expect($("#meals-index").isPresent()).toBeTruthy();
 });

 it('displays list of meals after sign-in', function() {
   expect(list.first().getText()).toContain('Pasta');
 });

});
