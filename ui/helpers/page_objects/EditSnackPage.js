import * as Page from './Page';

export const url = `${Page.baseURL}/editsnack`;

export const header = {
    css: 'header',
    instructions: {
        class: 'header-text'
    },
    back: {
        class: 'button btn-back'
    }
}

export const buttons = {
    confirm: {
        xpath: ".//div[@class='confirm-modal']//button"
    }
}

export const scrollSelect = {
    id: 'scroll-select'
}

export function getSnackXPath(snackName) {
    return `.//p[text()='${snackName}']`
}
