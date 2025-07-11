import { commentService } from "../services/comment.service.js";

export const getCommentsByPhotoId = async (req, res, next) => {
  try {
    const photoId = parseInt(req.params.photoId);
    const comments = await commentService.getByPhotoId(photoId);
    res.json(comments);
  } catch (err) {
    next(err);
  }
};

export const postComment = async (req, res, next) => {
  try {
    const userId = req.user.nguoi_dung_id;
    const { hinh_id, noi_dung } = req.body;
    const comment = await commentService.create(userId, hinh_id, noi_dung);
    res.json(comment);
  } catch (err) {
    next(err);
  }
};
