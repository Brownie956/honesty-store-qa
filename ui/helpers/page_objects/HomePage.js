const Page = require('./Page');

module.exports.url = `${Page.baseURL}/`;

module.exports.reminderButton = {
    class: 'button homepage--button--nophoto' //This isn't a great selector
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
