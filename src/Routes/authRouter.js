/** @format */

const express = require("express");
const router = express.Router();

const { signin, signup } = require("../Controllers/authController.js");
const {
  getUser,
  getUserByUsername,
  patchUser,
} = require("../Controllers/getUserController.js");

// sign in user
router.post("/signin", signin);

// sign up user
router.post("/signup", signup);

//get user
router.get("/profile/:username", getUserByUsername);
// update posts
router.patch("/profile/:username", patchUser);

// get all users
router.get("/profile/", getUser);

module.exports = router;
