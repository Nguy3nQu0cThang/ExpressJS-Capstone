import express from "express";
import { checkPhotoSaved, savePhoto } from "../controllers/saved.controller.js";
import protect from "../common/middlewares/protect.middleware.js";

const savedRouter = express.Router();

// Kiểm tra ảnh đã lưu hay chưa
savedRouter.get("/:photoId", protect, checkPhotoSaved);

// Lưu ảnh
savedRouter.post("/", protect, savePhoto);

export default savedRouter;