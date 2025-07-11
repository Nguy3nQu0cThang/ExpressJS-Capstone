import express from "express";
import { getCommentsByPhotoId, postComment } from "../controllers/comment.controller.js";
import protect from "../common/middlewares/protect.middleware.js";


const commentRouter= express.Router();

// Lấy bình luận theo ID ảnh
commentRouter.get("/:photoId",protect, getCommentsByPhotoId);

// Gửi bình luận mới (có token)
commentRouter.post("/", protect , postComment);

export default commentRouter;