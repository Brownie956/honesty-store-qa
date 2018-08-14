const Page = require('./Page');

module.exports.url = `${Page.baseURL}/scanitem`;

module.exports.fileUpload = {
    browse: {
        id: 'fileUpload'
    }
}

module.exports.header = {
    css: 'header',
    instructions: {
        class: 'header-text'
    },
    back: {
        class: 'button btn-back'
    }
}

module.exports.viewFinder = {
    id: 'view-finder'
}
