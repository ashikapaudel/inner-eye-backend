// Schema model for user login and authentication using user email, user name, user password and contact in mongoose 
const mongoose = require ('mongoose');
const {Schema}  = mongoose;

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String, 
        required: true,
        unique: true
    },
    phoneNumber:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true //password must be encrypted
    }
});

const User = mongoose.model('User', userSchema);
module.exports = {
    User
}