'use strict'
var mint = require('mintjs');
var ext = mint.ext;
var util = mint.ext;
var config = mint.config;
config.baseUrl = "http://dev.sencha.com/extjs/5.1.0/examples/kitchensink/";
// Recommended filename: Given_I_am_on_the_#.js
module.exports = function () {
    this.Given(/^I am on the "([^"]*)"$/, function (arg1) {
        // Write the automation code here
        pending();
    });
};

// Recommended filename: When_I_enter_#_field.js
module.exports = function () {
    this.When(/^I enter "([^"]*)" in "([^"]*)" field$/, function (arg1, arg2) {
        // Write the automation code here
        pending();
    });
};

// Recommended filename: When_I_select_#_combobox.js
module.exports = function () {
    this.When(/^I select "([^"]*)" from "([^"]*)" combobox$/, function (arg1, arg2
    ) {
        // Write the automation code here
        pending();
    });
};

// Recommended filename: When_I_click_#_button.js
module.exports = function () {
    this.When(/^I click "([^"]*)" button$/, function (arg1) {
        // Write the automation code here
        pending();
    });
};

// Recommended filename: Then_Detail_info_should_be_shown.js
module.exports = function () {
    this.Then(/^Detail info should be shown$/, function () {
        // Write the automation code here
        pending();
    });
};


