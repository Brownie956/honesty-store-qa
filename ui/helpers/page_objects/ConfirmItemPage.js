const Page = require('./Page');

module.exports.url = `${Page.baseURL}/confirmItem`;

module.exports.handImage = {
    class: 'hand' //This isn't a great selector
}

module.exports.buttons = {
    editSnack: {
        xpath: ".//button[@data-test='NO']"
    },
    confirmSnack: {
        xpath: ".//button[@data-test='YES']"
    }
}
