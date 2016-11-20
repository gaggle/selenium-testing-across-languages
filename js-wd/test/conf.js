"use strict";
const chai = require("chai")
const chaiAsPromised = require("chai-as-promised")
chai.use(chaiAsPromised)
chai.should()
const wd = require("wd")
chaiAsPromised.transferPromiseness = wd.transferPromiseness

exports.get_browser = function () {
  const browser = wd.promiseChainRemote()
  return browser.init({
      browserName: 'chrome',
      chromeOptions: {
        args: ['--incognito']
      }
    })
    .then(function () {
      return browser
    })
}
