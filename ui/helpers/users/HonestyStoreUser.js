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

module.exports = HonestyStoreUser
