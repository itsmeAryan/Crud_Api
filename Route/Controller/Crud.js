// crud operation on user details
// here we go
const express=require("express");
const CrudRoute=express.Router();
const passport=require("passport");
const {UpdateUSer,DeletUser,Authentication}=require("../Function/AllFunction");

// update user
CrudRoute.route("/update-user/:id")
.put(Authentication,
    UpdateUSer,
    passport.authenticate("local")
    )

// delete user
CrudRoute.route("/delete-user/:id")
.delete(DeletUser)
module.exports=CrudRoute;