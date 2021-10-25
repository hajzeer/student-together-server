/** @format */

const express = require("express");
const { getPosts, getOnePost } = require("../Controllers/getPostController.js");
const createPosts = require("../Controllers/createPostController.js");
const deletePosts = require("../Controllers/deletePostController.js");
const putPosts = require("../Controllers/putPostController.js");

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getOnePost);
router.post("/", createPosts);
router.delete("/:id", deletePosts);
router.put("/:id", putPosts);

module.exports = router;
