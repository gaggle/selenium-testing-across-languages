var chai = require("chai")
var chaiAsPromised = require("chai-as-promised")
chai.use(chaiAsPromised)
chai.should()

wd = require("wd")

chaiAsPromised.transferPromiseness = wd.transferPromiseness

describe("simple", function () {
  this.timeout(10000)

  var browser

  before(function () {
    browser = wd.promiseChainRemote()
    return browser.init({browserName: "chrome"})
  })

  after(function () {
    return browser.quit()
  })

  it("should retrieve the page title", function () {
    return browser.get("http://google.com").title().should.become("Google")
  })
})
