const Page = require('./Page');

module.exports.url = `${Page.baseURL}/disclaimer`;

module.exports.acceptButton = {
    class: 'button button-accept' //This isn't a great selector
}

module.exports.buttons = {
    accept: {
        class: 'button button-accept' //This isn't a great selector
    },
    back: {
        class: 'button button-back'
    }
}
