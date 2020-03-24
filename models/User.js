const mongoose = require("mongoose")
const Schema = mongoose.Schema
const UserSchema = new Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    mobile_no: {
        type: Number
    },
    middle_initial: {
        type: String
    },
    birthdate: {
        type: Date
    },
    address:{
        type: String
    },
    email:{
        type: String
    },
    username:{
        type: String
    },
    password:{
        type: String
    },
    created: {
        type: Date,
        defalut:Date.now
    }
},{
    
        collection: `useraccounts`
})
module.exports =User =mongoose.model('users',userSchema)