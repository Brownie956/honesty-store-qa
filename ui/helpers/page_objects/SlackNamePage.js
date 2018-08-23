import * as Page from './Page';

export const url = `${Page.baseURL}/slackname`;

export function getAccountXPath(name) {
    return `.//p[text()='${name}']`;
}


export const buttons = {
    confirm: {
        xpath: ".//div[@class='confirm-modal']//button"
    },
    back: {
        class: 'button btn-back'
    }
}

export const header = {
    instructions: {
        class: 'header-text'
    }
}

export const scrollSelect = {
    id: 'scroll-select'
}
