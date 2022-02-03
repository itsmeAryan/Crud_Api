const {UserModel}=require("../../Config/Keys");
const User =require("mongoose").model(UserModel);
// register function
module.exports.Register=async(req,res,done)=>{
    const {user,email,password}=req.body;
    const obj={
        user,
        email,
        password
    }
    const UserExist=await User.findOne({email});
    if(UserExist){res.status(200).json("user already exist")};
    if(email===undefined ||password===undefined ||email===''||password===''){res.status(400).json("fields cannot be empty")}
    else{
        const data=await User.create(obj);
    // res.status(200).json(data)
    done(null,data)
    }
    
    
}
// after registeration
module.exports.AfterRegisteraion=function(req,res){
    res.redirect("/home")
}

// After Login
module.exports.AfterLogin=function(req,res){
    res.redirect("/home")
}
// Authentication to check user logged in or not
module.exports.Authentication=function USerCheck(req,res,next){
    if(req.user){
        next();
    }
    else{
        res.redirect("/");
        
    }
}

// get user details
module.exports.SingleUSer=(req,res)=>{
    res.status(200).json(req.user)

};

// All users details
module.exports.AllUsers=async(req,res)=>{
    const data=await User.find({});
     res.status(200).json(data)
 
 }

    // update user
module.exports.UpdateUSer=async(req,res,done)=>{
        const {id}=req.params;
        if(id===undefined ||id===''){
            done(null,false,{message:"id is not valid"})
            res.status(400).json("bad credentials");
        }
        const update=req.body;
        const data=await User.findByIdAndUpdate(id,update,{new:true});
        if(data){
        res.status(200).json(data)
        done(null,data)
    
        }else{
            done(null,false,{message:"data not found"});
            res.status(400).json("no user found")
    
        }
    }
    
    // delete user
module.exports.DeletUser=async(req,res)=>{
        const {id}=req.params;
        if(id===''||id===undefined){
            res.status(400).json("bad Auth")
        }else{
            const data=await User.findByIdAndDelete(id);
            if(data){
                res.status(200).json("user deleted")
            }else{
                res.status(400).json("no data found cant be deletable")
            }
        }
    }

// Home page
module.exports.HomePage=(req,res)=>{
    const {user}=req.user;
    res.status(200).json(`welcome ${user}`)
}

// user logout
module.exports.LogoutUSer=(req,res)=>{
    req.logout();
    res.redirect("/")
    }





