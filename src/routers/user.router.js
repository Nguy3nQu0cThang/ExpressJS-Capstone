import express from "express";
import { getUserProfile, updateUserProfile, getUserSavedPhotos, getUserCreatedPhotos } from "../controllers/user.controller.js";
import protect from "../common/middlewares/protect.middleware.js"

const userRouter = express.Router();

// Lấy thông tin cá nhân (từ token)
userRouter.get("/profile", protect, getUserProfile);

// Cập nhật thông tin cá nhân
userRouter.put("/profile", protect, updateUserProfile);

// Ảnh đã lưu của user hiện tại
userRouter.get("/saved", protect, getUserSavedPhotos);

// Ảnh đã tạo của user hiện tại
userRouter.get("/created", protect, getUserCreatedPhotos);

export default userRouter;