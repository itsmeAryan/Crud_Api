const {Authentication,SingleUSer,LogoutUSer,AllUsers,HomePage}=require("../Function/AllFunction")
// i can use Router but trying new approach for it
module.exports=(app)=>{
    // get users detail
app.get("/user-detail",
Authentication
,SingleUSer);



// all users details
app.get("/all-users",
Authentication,
AllUsers);


// HomePage
app.get("/home",
Authentication,
HomePage);


// user logout
app.get("/logout-user",
LogoutUSer);

}

