/** @format */

const express = require("express");
const getPosts = require("../Controllers/getPostController.js");
const createPosts = require("../Controllers/createPostController.js");
const deletePosts = require("../Controllers/deletePostController.js");
const putPosts = require("../Controllers/putPostController.js");

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPosts);
router.delete("/:id", deletePosts);
router.put("/:id", putPosts);

module.exports = router;
