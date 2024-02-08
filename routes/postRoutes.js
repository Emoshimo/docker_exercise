const express = require("express");

const postController = require("../controller/postController");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

router
  .route("/")
  .get(postController.getAllPosts)
  .post(protect, postController.createPost);
router
  .route("/:id")
  .get(postController.getOnePost)
  .post(postController.likePost)
  .patch(postController.updatePost)
  .delete(postController.deletePost);

module.exports = router;
