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
const createComment = require("../Controllers/createCommentsController.js");
const getComment = require("../Controllers/getCommentsController.js");

const router = express.Router();

//get posts
router.get("/", getPosts);
router.get("/:id", getOnePost);

//get user's all posts
router.get("/profile/:username", getPostsByUser);

// post posts
router.post("/", createPosts);

// delete posts
router.delete("/:id", deletePosts);

// update posts
router.put("/:id", putPosts);

//create comments
router.post("/comments/:id", createComment);

//get comments
router.get("/comments/:id", getComment);

module.exports = router;
