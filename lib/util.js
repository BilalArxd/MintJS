var chai = require('chai');
var config = require('./config.js')

module.exports = {
    assert: chai.assert,
    screenshot: function (featureName, fileName) {
        browser.saveScreenshot('./output/' + featureName + '/' + fileName + '.png');
        return
    },
    logger: function (message) {
        console.log("log > " + message);
        return
    },
    wait: function (timeSpan) {
        browser.pause(timeSpan);
    },
    waitForExist: function (selector, timeSpan) {
        browser.waitForExist(selector, timeSpan);
    },
    loadPage: function (path) {
        browser.url(config.baseUrl + path);
    }
}

