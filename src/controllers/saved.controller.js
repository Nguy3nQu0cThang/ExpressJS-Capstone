import { savedService } from "../services/saved.service.js";

export const checkPhotoSaved = async (req, res, next) => {
  try {
    const userId = req.user.nguoi_dung_id;
    const photoId = parseInt(req.params.photoId);
    const isSaved = await savedService.checkSaved(userId, photoId);
    res.json({ isSaved });
  } catch (err) {
    next(err);
  }
};

export const savePhoto = async (req, res, next) => {
  try {
    const userId = req.user.nguoi_dung_id;
    const { hinh_id } = req.body;
    const saved = await savedService.save(userId, hinh_id);
    res.json(saved);
    if (!hinh_id) throw new Error("Thiếu hinh_id trong request body");
  } catch (err) {
    next(err);
  }
};