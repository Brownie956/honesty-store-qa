const Page = require('./Page');

module.exports.url = `${Page.baseURL}/`;

module.exports.buttons = {
    noPhoto: {
        class: 'button homepage--button--nophoto'
    },
    snackChat: {
        class: 'button homepage--button--snackchat'
    }
}

module.exports.images = {
    hands: {
        class: 'homepage--hands'
    }
}

module.exports.text = {
    heading: {
        class: 'text text-payinglater'
    },
    subheading: {
        class: 'text text-subheading'
    }
}
