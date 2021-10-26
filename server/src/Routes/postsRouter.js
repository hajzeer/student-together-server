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

router.get("/", getPosts);
router.get("/:id", getOnePost);
router.get("/profile/:username", getPostsByUser);
router.post("/", createPosts);
router.delete("/:id", deletePosts);
router.put("/:id", putPosts);

module.exports = router;
