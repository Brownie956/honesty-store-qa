import * as Page from './Page';

export const url = `${Page.baseURL}/confirmItem`;

export const handImage = {
    class: 'hand' //This isn't a great selector
}


export const buttons = {
    editSnack: {
        xpath: ".//button[@data-test='NO']"
    },
    confirmSnack: {
        xpath: ".//button[@data-test='YES']"
    }
}
