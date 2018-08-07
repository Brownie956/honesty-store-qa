const Page = require('./Page');

module.exports.url = `${Page.baseURL}/success`;

module.exports.notification = {
    class: 'text text-remindersent',
    id: 'success-message'
}

module.exports.images = {
    successHand: {
        class: 'success-hand'
    }
}
