const Page = require('./Page');

module.exports.url = `${Page.baseURL}/slackname`;

module.exports.getAccountXPath = (name) => {
    return `.//p[text()='${name}']`;
}
