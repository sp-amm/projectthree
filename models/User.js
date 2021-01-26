const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    username:{type:String},
    password:{type:String},
    name: {type:String},
    email: {type:String},
    address: [{
        aptno: {type:String},
        streetno: {type:String},
        streetname: {type:String},
        suburb: {type:String},
        postcode: {type:String},
        country: {type:String},
    }],
    booksPosted: [{
        type:Schema.Types.ObjectId,
        ref: "Book"
    }],
    booksPurchased: [{
        type:Schema.Types.ObjectId,
        ref: "Book"
    }],

});


const User = mongoose.model("User", UserSchema);

module.exports = User;