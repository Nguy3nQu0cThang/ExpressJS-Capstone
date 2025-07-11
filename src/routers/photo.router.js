import express from "express";
import { getAllPhotos, searchPhotos, getPhotoById, createPhoto, deletePhoto } from "../controllers/photo.controller.js";
import protect from "../common/middlewares/protect.middleware.js";



const photoRouter = express.Router();

// Danh sách ảnh
photoRouter.get("/",protect, getAllPhotos);

// Tìm kiếm ảnh theo tên
photoRouter.get("/search",protect, searchPhotos);

// Chi tiết ảnh theo id
photoRouter.get("/:id", protect,getPhotoById);

// Thêm ảnh mới
photoRouter.post("/", protect, createPhoto);

// Xoá ảnh đã tạo
photoRouter.delete("/:id", protect, deletePhoto);

export default photoRouter;