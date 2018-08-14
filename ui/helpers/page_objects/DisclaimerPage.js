const Page = require('./Page');

module.exports.url = `${Page.baseURL}/disclaimer`;

module.exports.buttons = {
    accept: {
        class: 'button btn-primary btn-block'
    },
    back: {
        class: 'button btn-back'
    }
}
