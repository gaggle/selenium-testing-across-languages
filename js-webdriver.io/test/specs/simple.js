var assert = require("assert")

describe("simple", function () {
  it("should have the right title", function () {
    browser.url("http://google.com")
    var title = browser.getTitle()
    assert.equal(title, "Google")
  })
})
