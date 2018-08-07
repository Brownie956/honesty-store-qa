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
        class: 'item-recognition item-recognition--instructions'
    },
    back: {
        class: 'button button-back'
    }
}

module.exports.viewFinder = {
    id: 'view-finder'
}
