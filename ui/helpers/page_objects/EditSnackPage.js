const Page = require('./Page');

module.exports.url = `${Page.baseURL}/editsnack`;

module.exports.header = {
    css: 'header',
    instructions: {
        class: 'edit-snack edit-snack--text-info'
    },
    back: {
        class: 'button button-back'
    }
}

module.exports.scrollSelect = {
    id: 'scroll-select'
}

module.exports.getSnackXPath = (snackName) => {
    return `.//p[text()='${snackName}']`
}
