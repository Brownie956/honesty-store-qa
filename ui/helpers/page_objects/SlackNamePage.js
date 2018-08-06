const Page = require('./Page');

module.exports.url = `${Page.baseURL}/slackname`;

module.exports.getAccountXPath = (name) => {
    return `.//p[text()='${name}']`;
}


module.exports.buttons = {
    confirm: {
        class: 'button username-entry--confirm-button'
    }
}
