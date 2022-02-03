const {Register,AfterRegisteraion,AfterLogin}=require("../Function/AllFunction");
const passport=require("passport");
const { Router } = require("express");
// dont be confused 
// why i use this insted express Router
// i was trying new appraoch 
module.exports=(app)=>{
// register router
app.post("/register",
Register,passport.authenticate("local")
,AfterRegisteraion
);
// login router
app.post("/login",
passport.authenticate("local"),
AfterLogin
);
}



