"use strict"

var test = require("tape");
var webdriver = require("selenium-webdriver");
var chrome = require('selenium-webdriver/chrome');

function buildMyDriver() {
  // see here
  // https://github.com/webrtc/utilities/blob/master/src/selenium/selenium-lib.js
  var chromeOptions = new chrome.Options()
      .setChromeBinaryPath('node_modules/.bin/start-chrome')
      .addArguments('allow-file-access-from-files')
      .addArguments('use-fake-device-for-media-stream')
      .addArguments('use-fake-ui-for-media-stream')
      .addArguments('disable-translate')
      .addArguments('no-process-singleton-dialog')
      .addArguments('mute-audio');

  var sharedDriver = new webdriver.Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
  return sharedDriver.build();
}

test("tony test", { skip: process.env.SKIPME === "yup"},
  function(t){
    var driver = buildMyDriver();
    driver.get("http://p-p.me")
    .then(function(){
      t.pass("page loaded");
    })
  });
