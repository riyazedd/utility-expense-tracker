import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String,
        unique: true,
    },
    password:{
        type:String
    }
})

const User = mongoose.Model("User",userSchema);

export default User;