const Page = require('./Page');

module.exports.url = `${Page.baseURL}/`;

module.exports.buttons = {
    noPhoto: {
        class: 'button btn-secondary btn-block'
    },
    snackChat: {
        class: 'button btn-primary btn-block'
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
