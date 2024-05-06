let mongoose=require('mongoose')
const bcrypt=require('bcryptjs')

const UserSchema = new mongoose.Schema({
    userName: { type: String,  required: true, unique: true },
    userEmail: { type: String,  required: true, unique: true },
    userPassword: { type: String,  required: true },
    token:{type:String}
  });

const MbsUsers=mongoose.model("msdUser",UserSchema)

module.exports=MbsUsers