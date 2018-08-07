const User = require('./User');

class HonestyStoreUser extends User {
    constructor() {
        super();
    }
}

/*
* Mixins for individual page actions
*/ 
Object.assign(HonestyStoreUser.prototype, require('./pageUsers/HomeUser'));
Object.assign(HonestyStoreUser.prototype, require('./pageUsers/DisclaimerUser'));
Object.assign(HonestyStoreUser.prototype, require('./pageUsers/ScanItemUser'));
Object.assign(HonestyStoreUser.prototype, require('./pageUsers/ConfirmationUser'));
Object.assign(HonestyStoreUser.prototype, require('./pageUsers/SlackNameUser'));
Object.assign(HonestyStoreUser.prototype, require('./pageUsers/SuccessUser'));
Object.assign(HonestyStoreUser.prototype, require('./pageUsers/EditSnackUser'));

module.exports = HonestyStoreUser
