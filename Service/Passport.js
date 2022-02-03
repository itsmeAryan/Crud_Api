// getting our usermodel name
const {UserModel}=require("../Config/Keys");
const User=require("mongoose").model(UserModel);
// require pasport or its strategy
const passport=require("passport");
const Local=require("passport-local").Strategy;

// passport initialization or session
module.exports=(app)=>{
    app.use(passport.initialize())
app.use(passport.session());
}

// passport middleware
passport.use(new Local({usernameField:"email",passwordField:"password"},function(email,password,done){
    User.findOne({email},(err,data)=>{
        if(err){return done(err)}
        if(!data){
            return done(null,false,{message:"data not present"})}
        else{
            return done(null,data);
        }
    })
}));

// serialization
passport.serializeUser((user,done)=>{
    if(user){
        return done(null,user.id)
    }else{
        return done(null,false,{message:"user obj not found"})
    }
});
// deserialization
passport.deserializeUser(async(id,done)=>{
   const data=await User.findById({_id:id});
   if(data){
       return done(null,data)
   }else{
       return done(null,false,{message:"data not present"})
   }
    
})
