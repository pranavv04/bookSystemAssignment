const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
//user model
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

//password hashing before saving
userSchema.pre('save' , async function(next){
    const user = this;
    if(!user.isModified('password'))return next()
    try {
        const salt = await bcrypt.genSalt(10)  //generates salt of 10 rounds. Salt is random data added before hashing to make it secure
        const hashedPassword = await bcrypt.hash(user.password, salt);
        user.password = hashedPassword;
        next();
    } catch (error) {
        return next(error)
    }
})

//password comparison  => compares login password with hashed password
userSchema.methods.comparePassword = async function(candidatePassword){
    try {
        const isMatch = await bcrypt.compare(candidatePassword, this.password)
        return isMatch;
    } catch (error) {
        throw error;
    }
}

const User = mongoose.model('User', userSchema);
module.exports = User;