const {UserModel}=require("../Config/Keys");
const mongoose=require("mongoose");
const Schema=mongoose.Schema({
    user:{type:String,alias:"name"},
    email:{type:String,unique:true},
    password:{type:String}
},{timeStamps:true});
mongoose.model(UserModel,Schema);