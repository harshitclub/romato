const express = require("express");
const {
  userRegister,
  userLogin,
  userProfile,
  userUpdate,
} = require("../controllers/userControllers");

const userRoute = express.Router();

userRoute.post("/register", userRegister);
userRoute.post("/login", userLogin);
userRoute.get("/profile", userProfile);
userRoute.patch("/update", userUpdate);

module.exports = userRoute;
