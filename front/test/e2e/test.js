describe("test", function () {
  var myButton;

  beforeEach(function () {
    browser.get('http://localhost:3000');
    myButton = element(by.css(".btn-success"));
  });
  it("should be visible", function () {
    expect(myButton.isDisplayed()).toBe(true);
  });
  it("should be clickable", function () {
    myButton.click();
  });
});
