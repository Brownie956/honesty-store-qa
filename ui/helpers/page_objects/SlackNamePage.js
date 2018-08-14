const Page = require('./Page');

module.exports.url = `${Page.baseURL}/slackname`;

module.exports.getAccountXPath = (name) => {
    return `.//p[text()='${name}']`;
}


module.exports.buttons = {
    confirm: {
        xpath: ".//div[@class='confirm-modal']//button"
    },
    back: {
        class: 'button btn-back'
    }
}

module.exports.header = {
    instructions: {
        class: 'header-text'
    }
}

module.exports.scrollSelect = {
    id: 'scroll-select'
}
