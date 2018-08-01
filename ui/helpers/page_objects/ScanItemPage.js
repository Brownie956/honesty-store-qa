const Page = require('./Page');

module.exports.url = `${Page.baseURL}/scanitem`;

module.exports.fileUpload = {
    browse: {
        id: 'fileUploadBrowse'
    },
    fileSelector: {
        id: 'fileUpload'
    }
}