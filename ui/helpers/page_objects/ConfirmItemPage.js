const Page = require('./Page');

module.exports.url = `${Page.baseURL}/confirmItem`;

module.exports.handImage = {
    class: 'hand' //This isn't a great selector
}

module.exports.buttons = {
    editSnack: {
        class: 'button button-editsnack'
    },
    confirmSnack: {
        class: 'button button-yes'
    }
}
