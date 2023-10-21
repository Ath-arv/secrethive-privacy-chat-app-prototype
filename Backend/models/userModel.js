 const mongoose = require('mongoose');
 const bcrypt = require('bcryptjs');
 const UserSchema = mongoose.Schema({
    name : {type:String , required:true,unique:true},
    ip_add:{type:String,required:true},
    password : {type:String , required:true}

 },{timestamps : true}
 );

 UserSchema.methods.matchPassword = async function(enteredPassword){
 return await bcrypt.compare(enteredPassword,this.password);
}

 UserSchema.pre('save',async function(next){   //before saving
    if(!this.isModified){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);

 });

const User = mongoose.model("User",UserSchema);
module.exports= User;