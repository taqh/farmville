var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var AddressSchema = new Schema({
    street: {
        type: String,
        default: ""
    },
    city: {
        type: String,
        default: "",
    },
    state: {
        type: String,
        default: "",
    },
    country: {
        type: String,
        default: "",
    }
});

var User = new Schema({
    email: {
        type: String,
    },
    firstname: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ''
    },
    isSeller: {
        type: Boolean,
        default: false
    },
    address: AddressSchema,
    
    mobileNumber: {
        type: String,
        default: '',
    },
    storeId: {
        type: String,
        required: false,
    },
    storeName: {
        type: String,
        required: false,
    }

});

User.methods.getName = function () {
    return (this.firstname + ' ' + this.lastname);
};

User.plugin(passportLocalMongoose, {
    usernameField: 'email'
});

module.exports = mongoose.model('User', User);