exports.DynLoadingPage = function (browser) {
  const hello_world_sel = "#finish > h4"
  this.go = function () {
    return browser.get("https://the-internet.herokuapp.com/dynamic_loading/2")
  }

  this.clickStart = function () {
    return browser.elementByCss("#start > button").click()
  }

  this.getHelloWorld = function () {
    return browser.elementByCss(hello_world_sel)
  }

  this.waitForHelloWorld = function () {
    return browser.waitForElementByCss(hello_world_sel, 10000)
  }

  this.quit = function () {
    return browser.quit()
  }
}
