const express=require("express");
const port=process.env.PORT || 3001;
const app=express();
app.use(express.json())
require("./DB/Connector");
require("./Schema/UserSchema");
const session=require("express-session");
app.use(session({
    secret:"key planner",
    resave:false,
    saveUninitialized:true,
    cookie:{sameSite:"lax",httpOnly:true,secure:false,maxAge:1000*60*60}
}));


// using passport as a middleware
require("./Service/Passport")(app);
// routes for api operations
require("./Route/Controller/Auth")(app);
require("./Route/Controller/Controller")(app);
const CrudRouter=require("./Route/Controller/Crud")
app.use("/",CrudRouter);



// landing page
app.get("/",(req,res)=>{
    res.send("welcome to landing page please login or register")
    });

// universal path
app.get("*",(req,res)=>{
    res.send("seems you are in wrong path")
})
// starting our server
app.listen(port,()=>{
    console.log(`server started at http://localhost:${port}`);
});