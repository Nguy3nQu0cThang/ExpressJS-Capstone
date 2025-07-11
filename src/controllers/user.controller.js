import { userService } from "../services/user.service.js";

export const getUserProfile = async (req, res, next) => {
  try {
    const userId = req.user.nguoi_dung_id;
    console.log("UserID:", userId);
    const user = await userService.getProfile(userId);
    res.json(user);
  } catch (err) {
    next(err);
  }
};

export const updateUserProfile = async (req, res, next) => {
  try {
    const userId = req.user.nguoi_dung_id;
    const data = req.body;
    const updated = await userService.updateProfile(userId, data);
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

export const getUserSavedPhotos = async (req, res, next) => {
  try {
    const userId = req.user.nguoi_dung_id;
    const photos = await userService.getSavedPhotos(userId);
    res.json(photos);
  } catch (err) {
    next(err);
  }
};

export const getUserCreatedPhotos = async (req, res, next) => {
  try {
    const userId = req.user.nguoi_dung_id;
    const photos = await userService.getCreatedPhotos(userId);
    res.json(photos);
  } catch (err) {
    next(err);
  }
};
