module.exports.toBeDisplayed = {
    toBeDisplayed(received, argument) {
        const pass = received === argument;
        if(pass) {
            return {
                message: () => 'Expected element to not be displayed',
                pass: true
            };
        }
        else {
            return {
                message: () => 'Expected element to be displayed',
                pass: false
            };
        }
    }
};
