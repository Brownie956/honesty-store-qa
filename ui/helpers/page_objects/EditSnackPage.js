const Page = require('./Page');

module.exports.url = `${Page.baseURL}/editsnack`;

module.exports.header = {
    css: 'header',
    instructions: {
        class: 'header-text'
    },
    back: {
        class: 'button btn-back'
    }
}

module.exports.buttons = {
    confirm: {
        xpath: ".//div[@class='confirm-modal']//button"
    }
}

module.exports.scrollSelect = {
    id: 'scroll-select'
}

module.exports.getSnackXPath = (snackName) => {
    return `.//p[text()='${snackName}']`
}
