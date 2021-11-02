/** @format */

const express = require("express");
const router = express.Router();

const { signin, signup } = require("../Controllers/authController.js");

// sign in user
router.post("/signin", signin);

// sign up user
router.post("/signup", signup);

module.exports = router;
