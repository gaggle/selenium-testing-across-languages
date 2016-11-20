"use strict";
const chai = require("chai")
const chaiAsPromised = require("chai-as-promised")
const wd = require("wd")

chai.use(chaiAsPromised)
chai.should()
chaiAsPromised.transferPromiseness = wd.transferPromiseness

describe("simple", function () {
  this.timeout(30000)

  let browser

  before(function () {
    browser = wd.promiseChainRemote()
    return browser.init({browserName: "chrome"})
  })

  after(function () {
    return browser.quit()
  })

  describe("google", function () {
    it("should have expected title", function () {
      return browser.get("http://google.com").title()
        .should.become("Google")
    })
  })
})
