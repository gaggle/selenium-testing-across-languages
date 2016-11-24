const conf = require("./conf")
const pages = require("./pages")

describe("challenge", function () {
  this.timeout(30000)
  let page

  describe("Dynamic Loading 2", function () {
    before(function () {
      return conf.get_browser()
        .then(function (browser) {
          page = new pages.DynLoadingPage(browser)
          return page
        })
    })

    after(function () {
      return page.quit()
    })

    it("finds element after clicking start", function () {
      return page.go()
        .then(page.clickStart)
        .then(page.waitForHelloWorld)
        .then(function () {
          return page.getHelloWorld().text().should.become("Hello World!")
        })
    })
  })
})
