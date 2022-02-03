const mongoose =require("mongoose");
const {MongoURL}=require("../Config/Keys");
const option={useNewUrlParser:true,useUnifiedTopology:true};
mongoose.connect(MongoURL,option)
.then(()=>{console.log("database connected");})
.catch((e)=>{
    console.log("database disconnectd----->",e.message);
})