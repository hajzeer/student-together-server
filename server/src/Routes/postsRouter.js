/** @format */

const express = require("express");
const {
  getPosts,
  getOnePost,
  getPostsByUser,
} = require("../Controllers/getPostController.js");
const createPosts = require("../Controllers/createPostController.js");
const deletePosts = require("../Controllers/deletePostController.js");
const putPosts = require("../Controllers/putPostController.js");

const router = express.Router();

//get posts
router.get("/", getPosts);
router.get("/:id", getOnePost);

//get user's all posts
router.get("/profile/:username", getPostsByUser);

// post posts
router.post("/", createPosts);

// delete post
router.delete("/:id", deletePosts);

// update post
router.put("/:id", putPosts);

module.exports = router;
