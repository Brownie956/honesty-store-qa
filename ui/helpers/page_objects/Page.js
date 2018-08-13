module.exports.baseURL = 'http://localhost:3000'

const notificationBarId = 'notificationBar';
module.exports.notifications = {
    id: notificationBarId,
    mainText: {
        xpath: `.//div[@id='${notificationBarId}']//div[@class='text']`
    },
    subText: {
        xpath: `.//div[@id='${notificationBarId}']//div[@class='sub-text']`
    },
    dismiss: {
        xpath: `.//div[@id='${notificationBarId}']//div[@class='dismiss']`
    }
}

module.exports.login = {
    signInWithGoogle: {
        xpath: ".//li[@class='firebaseui-list-item']//button[@data-provider-id='google.com']"
    },
    signInWithEmail: {
        xpath: ".//li[@class='firebaseui-list-item']//button[@data-provider-id='password']",
        email: {
            name: 'email'
        },
        password: {
            name: 'password'
        },
        submit: {
            xpath: ".//button[@type='submit']"
        }
    }
}
