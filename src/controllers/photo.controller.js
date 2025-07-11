import { photoService } from "../services/photo.service.js";

export const getAllPhotos = async (req, res, next) => {
  try {
    const data = await photoService.getAll();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const searchPhotos = async (req, res, next) => {
  try {
    const { ten_hinh } = req.query;
    const data = await photoService.searchByName(ten_hinh);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const getPhotoById = async (req, res, next) => {
  try {
    const photoId = parseInt(req.params.id);
    const data = await photoService.getById(photoId);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const createPhoto = async (req, res, next) => {
  try {
    const userId = req.user.nguoi_dung_id;
    const data = req.body;
    const result = await photoService.create(userId, data);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export const deletePhoto = async (req, res, next) => {
  try {
    const photoId = parseInt(req.params.id);
    const result = await photoService.delete(photoId);
    res.json(result);
  } catch (err) {
    next(err);
  }
};