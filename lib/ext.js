
var util = require('./util.js')
module.exports = {
    Msg: {
        alert: function (message) {
            browser.execute(function (message) {
                Ext.Msg.alert(message);
            }, message);
        }
    },
    button: {
        click: function (buttonText) {
            util.wait(100);
            browser.execute(function (buttonText) {
                var obj = Ext.ComponentQuery.query("button[text=" + buttonText + "]");
                var btn = obj[obj.length - 1];
                btn.fireEvent("click", btn);
            }, buttonText);
        },
        isExist: function (buttonText, inverse) {
            browser.waitForExist('span=' + buttonText, 60000, inverse);
        },
        getCSS: function (buttonText, waitTime) {
            var html = "";
            return browser.execute(function (buttonText) {
                btn = Ext.ComponentQuery.query("button[text=" + buttonText + "]")[0];
                html = btn.btnEl.dom.className.toString();
                return html;
            }, buttonText);
        }
    },
    textField: {
        setText: function (name, text) {
            util.wait(100);
            browser.execute(function (name, text) {
                var obj = Ext.ComponentQuery.query("textfield[name=" + name + "]");
                obj[obj.length - 1].setValue(text);
            }, name, text);
        }
    },
    checkBox: {
        check: function (name, value) {
            browser.execute(function (value) {
                var check = Ext.ComponentQuery.query('checkbox[boxLabel=' + name + ']')[0];
                check.setValue(value);
            }, value);
        }

    },
    grid: {
        click: function (gridTitle, rowIndex, columnIndex) {
            browser.execute(function (gridTitle, rowIndex, columnIndex) {
                var grid = Ext.ComponentQuery.query('grid[title=' + gridTitle + ']')[0];
                var row = grid.view.getRow(rowIndex);
                row.childNodes[columnIndex].click();
            }, gridTitle, rowIndex, columnIndex);
        },
        recordExist: function (gridTitle, keyValueArray) {
            return browser.execute(function (gridTitle, keyValueArray) {
                var grid = Ext.ComponentQuery.query('grid[title=' + gridTitle + ']')[0];
                var items = grid.store.data.items;
                var flag = false;
                items.forEach(function (element) {
                    keyValueArray.forEach(function (item) {
                        flag = element.data[item.name] === item.value;
                        if (flag) return;
                    }, this);
                }, this);
                return flag;
            }, gridTitle, keyValueArray);
        }

    },
    xtype: {
        isExist: function (xtype, title) {
            return browser.execute(function (xtype, title) {
                var obj = Ext.ComponentQuery.query(xtype)[0];
                return obj.title === title;
            }, xtype, title);
        }

    }

}
